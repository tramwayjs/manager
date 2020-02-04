export default class EntityRepository {
    constructor(provider, entitiesParser) {
        this.provider = provider;
        this.entitiesParser = entitiesParser;
    }

    async get() {
        if (!this.entities) {
            this.entities = await this.getEntities();
        }

        return this.entities;
    }

    async getOne(key) {        
        if (!this.entities) {
            await this.get();
        }

        return this.entities[key];
    }

    async getEntities(filter = {}) {
        let options = {
            exclusions: ['index.js'],   
        };

        if (filter.className) {
            options.inclusions = [`${filter.className}.js`];
        }

        let entities = await this.provider.query(options);
        entities = entities.map(({data}) => this.entitiesParser.parseEntity(data.toString()));

        entities = entities.reduce((accumulator, item) => {
            accumulator[item.className] = item;
            return accumulator;
        }, {});
        return entities;
    }

    async getEntity(className) {
        const entities = await this.getEntities({className});
        return entities[className];
    }

    async updateEntity(className, item) {

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
            response = await this.provider.update(className, code)
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
            response = await this.provider.update(className, code)
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
            response = await this.provider.update(className, code)
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

    replaceFieldCode(code, field, item) {
        let {field, get, set} = field;

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