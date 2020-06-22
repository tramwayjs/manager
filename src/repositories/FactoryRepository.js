import path from 'path';

export default class FactoryRepository {
    constructor(provider, factoriesParser, templateService, options = {}) {
        this.provider = provider;
        this.factoriesParser = factoriesParser;
        this.templateService = templateService;
        this.options = options;
    }

    async get() {
        if (!this.factories) {
            this.factories = await this.getFactories();
        }

        return this.factories;
    }

    async getOne(key) {        
        return await this.getFactory(key);
    }

    async getFactories(filter = {}) {
        let options = {
            exclusions: ['index.js'],   
        };

        if (filter.className) {
            options.inclusions = [`${filter.className}.js`];
        }

        let factories;
        
        try {
            factories = await this.provider.query(options, this.options);
        } catch (e) {
            factories = [];
        }

        factories = factories.map(({data}) => this.prepareFactory(data.toString()));

        factories = factories.reduce((accumulator, item) => {
            accumulator[item.className] = item;
            return accumulator;
        }, {});
        return factories;
    }

    prepareFactory(data) {
        let item = this.factoriesParser.parseFactory(data);

        if (!item) {
            return;
        }
        
        const {dir, ext} = this.options;
        item.location = path.resolve(dir, `${item.className}.${ext}`);

        return item;
    }

    async getFactory(className) {
        const factories = await this.getFactories({className});
        return factories[className];
    }

    async createFactory({className, parentClassName, parentClassImport, entityClassName, entityFields, entityClassImport}) {
        if (!className) {
            className = `${entityClassName}Factory`;
        }

        let template = this.createFactoryTemplate({className, parentClassName, parentClassImport, entityClassName, entityFields, entityClassImport});

        let data = await this.templateService.render(template);
        await this.provider.create({id: className, data }, this.options);
        this.factories = await this.getFactories();
    }

    createFactoryTemplate({className, parentClassName, parentClassImport, entityClassName, entityFields, entityClassImport}) {        
        return this.templateService.resolveTemplate('factory')
            .setClassName(className)
            .setParentClassName(parentClassName)
            .setParentClassImport(parentClassImport)
            .setEntityClassName(entityClassName)
            .setEntityFields(entityFields)
            .setEntityClassImport(entityClassImport)
        ;
    }

    async updateFactory(className, {entityField, entityClassName}) {
        let factory = await this.getFactory(className);
        let response;

        if (!factory) {
            throw new Error('Factory does not exist')
        }

        let {code} = factory;

        if (entityClassName && `${entityClassName}Factory` !== className) {
            const {dir, ext} = this.options;
            const currentFile = path.join(dir, `${className}.${ext}`);
            let newClassName = `${entityClassName}Factory`;
            const newFile = path.join(dir, `${newClassName}.${ext}`);
            await this.provider.rename(currentFile, newFile);

            code = code
                .replace(className, newClassName)
                .replace(factory.entityClassName, entityClassName)
            ;

            className = newClassName;
        }

        if (entityField) {
            code = this.addSetStatement(code, entityField);
            console.log(code)
        }
        
        try {
            response = await this.provider.update(className, code, this.options)
        } catch(e) {
            throw e;
        }

        this.factories = await this.getFactories();
    }

    async deleteFactory(className) {
        await this.provider.delete(className, this.options)
        this.factories = await this.getFactories();
    }

    addSetStatement(code, item) {
        let {field, set} = item;

        let createFunction = this.factoriesParser.findFunction(code, 'create');
        let originalCreateFunction = createFunction;
        
        createFunction = this.generateDestructuringField(createFunction, field);
        createFunction = this.generateSetterCall(createFunction, field, set);

        return code.replace(originalCreateFunction, createFunction);
    }

    generateDestructuringField(createFunction, field) {
        const start = createFunction.indexOf('const {');
        const end = createFunction.indexOf('}', start) + 1;

        const returnStatement = createFunction.substring(start, end);

        const returnStatementSettersStart = returnStatement.indexOf('{') + 1
        const returnStatementSetters = returnStatement.substring(returnStatementSettersStart);
        const settersLastFieldEnd = returnStatementSetters.lastIndexOf(',') + start + returnStatementSettersStart;

        const settersStatementEnd = createFunction.substring(settersLastFieldEnd + 1)

        const setter = this.factoriesParser.generateField(field);

        return createFunction.replace(settersStatementEnd, setter + this.factoriesParser.generateSetFunctionNewLine() + settersStatementEnd);
    }

    generateSetterCall(createFunction, field, set) {
        const start = createFunction.indexOf('return new');
        const end = createFunction.indexOf(';', start) + 1;

        const returnStatement = createFunction.substring(start, end);

        const returnStatementSettersStart = returnStatement.indexOf(')') + 1
        const returnStatementSetters = returnStatement.substring(returnStatementSettersStart);
        const settersLastFieldEnd = returnStatementSetters.lastIndexOf(')') + start + returnStatementSettersStart;

        const settersStatementEnd = createFunction.substring(settersLastFieldEnd + 1)

        const setter = this.factoriesParser.generateSetFunctionChain(field, set);

        return createFunction.replace(settersStatementEnd, setter + this.factoriesParser.generateSetFunctionNewLine() + settersStatementEnd);
    }
}