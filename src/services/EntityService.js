export default class EntityService {
    constructor(repository, factoryService) {
        this.repository = repository;
        this.factoryService = factoryService;
    }

    async get() {
        let entities;

        try {
            entities = await this.repository.get();
        } catch(e) {
            throw e;
        }

        return entities;
    }

    async getOne(className) {
        let entity;

        try {
            entity = await this.repository.getOne(className);
        } catch(e) {
            throw e;
        }

        return entity;
    }

    async create({className, parentClassName, parentClassImport}, withFactory) {
        let item;

        try {
            item = await this.repository.createEntity({className, parentClassName, parentClassImport});
        } catch(e) {
            throw e;
        }

        if (withFactory) {
            try {
                let {fields: entityFields} = await this.getOne(className);
    
                let factory = await this.factoryService.createFactory({
                    entityClassName: className, 
                    entityClassImport: this.repository.generateImportStatement(className),
                    entityFields,
                })
            } catch(e) {
                throw e;
            }
        }

        return item;
    }

    async update(currentClassName, {className, parentClassName, parentClassImport}, withFactory) {
        let item;

        try {
            item = await this.repository.updateEntity(currentClassName, {className, parentClassName, parentClassImport});
        } catch(e) {
            throw e;
        }

        if (withFactory) {
            try {    
                let factory = await this.factoryService.updateFactory(`${currentClassName}Factory`, {
                    entityClassName: className, 
                    entityClassImport: this.repository.generateImportStatement(className),
                })
            } catch(e) {
                throw e;
            }
        }

        return item;
    }

    async delete(className) {
        try {
            await this.repository.deleteEntity(className);
        } catch(e) {
           throw e;
        }
    }

    async createField(className, {field, get, set}, withFactory) {
        let item;

        try {
            item = await this.repository.createField(className, {field, get, set});
        } catch(e) {
            throw e;
        }

        if (withFactory) {
            let {fields} = await this.repository.getOne(className);
            let [entityField] = fields.filter(({field: fieldField}) => fieldField === field);

            try {
                await this.factoryService.updateFactory(`${className}Factory`, {entityField});
            } catch(e) {
                throw e;
            }
        }

        return item;
    }

    async replaceField(className, fieldName, field, get, set) {
        let item;

        try {
            item = await this.repository.replaceField(className, fieldName, field);
        } catch(e) {
            throw e;
        }

        return item;
    }

    async deleteField(className, fieldName) {
        let item;

        try {
            item = await this.repository.deleteField(className, fieldName);
        } catch(e) {
            throw e;
        }

        return item;
    }
}