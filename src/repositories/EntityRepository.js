import path from 'path';

export default class EntityRepository {
    constructor(provider, entitiesParser, templateService, options = {}) {
        this.provider = provider;
        this.entitiesParser = entitiesParser;
        this.templateService = templateService;
        this.options = options;
    }

    async get() {
        if (!this.entities) {
            this.entities = await this.getEntities();
        }

        return this.entities;
    }

    async getOne(key) {        
        return await this.getEntity(key);
    }

    async getEntities(filter = {}) {
        let options = {
            exclusions: ['index.js'],   
        };

        if (filter.className) {
            options.inclusions = [`${filter.className}.js`];
        }

        let entities;
        
        try {
            entities = await this.provider.query(options, this.options);
        } catch (e) {
            entities = [];
        }

        entities = entities.map(({data}) => this.prepareEntity(data.toString()));

        entities = entities.reduce((accumulator, item) => {
            accumulator[item.className] = item;
            return accumulator;
        }, {});
        return entities;
    }

    prepareEntity(data) {
        let item = this.entitiesParser.parseEntity(data);

        if (!item) {
            return;
        }
        
        const {dir, ext} = this.options;
        item.location = path.resolve(dir, `${item.className}.${ext}`);

        return item;
    }

    async getEntity(className) {
        const entities = await this.getEntities({className});
        return entities[className];
    }

    async createEntity({className, parentClassName, parentClassImport}) {
        let template = this.createEntityTemplate({className, parentClassName, parentClassImport});

        let data = await this.templateService.render(template);
        await this.provider.create({id: className, data }, this.options);
        this.entities = await this.getEntities();
    }

    createEntityTemplate({className, parentClassName, parentClassImport}) {
        return this.templateService.resolveTemplate('entity')
            .setClassName(className)
            .setParentClassName(parentClassName)
            .setParentClassImport(parentClassImport)
        ;
    }

    generateImportStatement(entityClassName) {
        return `import { ${entityClassName} } from '../entities'`;
    }

    async updateEntity(currentClassName, {className, parentClassName, parentClassImport}) {
        let currentEntity = await this.getOne(currentClassName);

        if (!currentEntity) {
            throw new Error('Entity does not exist')
        }

        let data = currentEntity.code;

        if (currentClassName !== className) {
            const {dir, ext} = this.options;
            const currentFile = path.join(dir, `${currentClassName}.${ext}`);
            const newFile = path.join(dir, `${className}.${ext}`);
            await this.provider.rename(currentFile, newFile);

            data = data.replace(currentClassName, className);
        }

        // if (currentEntity.parentClassName !== parentClassName) {
        //     data = data.replace(currentEntity.parentClassName, parentClassName);
        // }

        // if (currentEntity.parentClassImport !== parentClassImport) {
        //     data = data.replace(currentEntity.parentClassImport, parentClassImport);
        // }

        await this.provider.update(className, data, this.options);
        this.entities = await this.getEntities();
    }

    async deleteEntity(className) {
        await this.provider.delete(className, this.options)
        this.entities = await this.getEntities();
    }

    async createField(className, item) {
        let entity = await this.getEntity(className);
        let response;

        if (!entity) {
            throw new Error('Entity does not exist')
        }

        let {code} = entity;
        code = this.addFieldCode(code, item);

        try {
            response = await this.provider.update(className, code, this.options)
        } catch(e) {
            throw e;
        }

        this.entities = await this.getEntities();
        return response;
    }

    async replaceField(className, fieldName, item) {
        let entity = await this.getEntity(className);
        let response;

        if (!entity) {
            throw new Error('Entity does not exist')
        }

        let {code, fields} = entity;
        const [field] = fields.filter(({field}) => field === fieldName);

        if (!field) {
            throw new Error('Entity does not have field');
        }

        code = this.replaceFieldCode(code, field, item)

        try {
            response = await this.provider.update(className, code, this.options)
        } catch(e) {
            throw e;
        }

        this.entities = await this.getEntities();
        return response;
    }

    async deleteField(className, fieldName) {
        let entity = await this.getEntity(className);
        let response;

        if (!entity) {
            throw new Error('Entity does not exist')
        }

        let {code, fields} = entity;
        const [item] = fields.filter(({field}) => field === fieldName);

        if (!item) {
            throw new Error('Entity does not have field');
        }

        code = this.removeFieldCode(code, item)

        try {
            response = await this.provider.update(className, code, this.options)
        } catch(e) {
            throw e;
        }

        this.entities = await this.getEntities();
        return response;
    }

    addFieldCode(code, item) {
        let {field, get, set} = item;

        const getter = this.entitiesParser.generateGetter(field, get);
        const setter = this.entitiesParser.generateSetter(field, set);

        const classEndPosition = code.lastIndexOf("}");
        const beginning = code.substring(0, classEndPosition);
        const ending = code.substring(classEndPosition, code.length);

        return beginning + "\n" + getter + "\n" + setter + ending;
    }

    replaceFieldCode(code, current, item) {
        let {field, get, set} = current;

        return code
            .replace(get, this.entitiesParser.generateGetter(item.field, item.get))
            .replace(set, this.entitiesParser.generateSetter(item.field, item.set))
        ;
    }

    removeFieldCode(code, item) {
        let {field, get, set} = item;

        const getter = this.entitiesParser.findGetter(code, field, get);
        const setter = this.entitiesParser.findSetter(code, field, set);

        return code.replace(getter, '').replace(setter, '');
    }
}