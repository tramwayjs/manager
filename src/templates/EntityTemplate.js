import templatesLocation from '../../templates';

export default class EntityTemplate {
    file = `${templatesLocation}/entity`;
    parentClassName = 'Entity';
    parentClassImport = `import { Entity } from 'tramway-core-connection'`;

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


}