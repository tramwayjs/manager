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
        code = this.updateCode(code, item);

        try {
            response = await this.provider.update(className, code)
        } catch(e) {
            throw e;
        }

        this.entities = await this.getEntities();
        return response;
    }

    updateCode(code, item) {
        let {field, get, set} = item;

        const getter = this.entitiesParser.generateGetter(field, get);
        const setter = this.entitiesParser.generateSetter(field, set);

        const classEndPosition = code.lastIndexOf("}");
        const beginning = code.substring(0, classEndPosition);
        const ending = code.substring(classEndPosition, code.length);

        return beginning + "\n" + getter + "\n" + setter + ending;
    }

}