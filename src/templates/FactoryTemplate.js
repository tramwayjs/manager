import templatesLocation from '../../templates';

export default class FactoryTemplate {
    file = `${templatesLocation}/factory`;
    parentClassName = 'Factory';
    parentClassImport = `import { Factory } from 'tramway-core-connection'`;

    getFile() {
        return this.file;
    }

    getClassName() {
        return this.className;
    }

    setClassName(className) {
        this.className = className;
        return this;
    }

    getParentClassName() {
        return this.parentClassName;
    }

    setParentClassName(parentClassName) {
        if (!parentClassName) {
            return this;
        }

        this.parentClassName = parentClassName;
        return this;
    }

    getParentClassImport() {
        return this.parentClassImport;
    }

    setParentClassImport(parentClassImport) {
        if (!parentClassImport) {
            return this;
        }
        
        this.parentClassImport = parentClassImport;
        return this;
    }

    getEntityClassName() {
        return this.entityClassName
    }

    setEntityClassName(entityClassName) {
        this.entityClassName = entityClassName;
        return this;
    }

    getEntityFields() {
        return this.entityFields
    }

    setEntityFields(entityFields) {
        this.entityFields = entityFields;
        return this;
    }

    getEntityClassImport() {
        return this.entityClassImport;
    }

    setEntityClassImport(entityClassImport) {
        this.entityClassImport = entityClassImport;
        return this;
    }

}