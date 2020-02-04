const SEPARATOR = `    `;

export default class EntitiesParser {
    parseEntity(contents) {
        return {
            fields: this.findGettersAndSetters(contents),
            code: contents,
            ... this.findClassInfo(contents),
        }
    }

    findGettersAndSetters(contents) {
        return [... contents.matchAll(/^\s*\t*((get|set)(\w*).*)\(/gm)].map(match => {
            const [full, func, type, property] = match || [];

            return {
                field: property.toLowerCase(),
                type,
                func,
            }
        })
        .reduce((accumulator, {field, type, func}) => {
            const existingItemIndex = accumulator.findIndex(item => item.field === field);
            let existingItem = existingItemIndex >= 0 ? accumulator[existingItemIndex] : undefined;

            let item = {
                field,
                [type]: func,
            };

            if (existingItem) {
                existingItem[type] = func;
                accumulator[existingItemIndex] = existingItem;
                return accumulator;
            }

            return [...accumulator, item];
        }, []);
    }

    findClassInfo(contents) {
        const [full, className, extendsPiece, baseClassName] = contents.match(/class\s*(\w*)(\s*extends\s*(\w*))?/) || [];
        
        return {className, baseClassName};
    }

    generateGetterFuncName(field) {
        return `get${field.capitalize()}`;
    }

    generateSetterFuncName(field) {
        return `set${field.capitalize()}`;
    }

    generateGetter(field, get) {
        return `${SEPARATOR}${get || this.generateGetterFuncName(field)}() {\n${SEPARATOR}${SEPARATOR}return this.${field};\n${SEPARATOR}}\n`;
    }

    generateSetter(field, set) {
        return `${SEPARATOR}${set || this.generateSetterFuncName(field)}(${field}) {\n${SEPARATOR}${SEPARATOR}this.${field} = ${field};\n${SEPARATOR}${SEPARATOR}return this;\n${SEPARATOR}}\n `;
    }

    findFunction(code, func) {
        const funcLocation = code.indexOf(`\n${SEPARATOR}${func}`);
        const endChar = "}\n";
        
        return code.substring(funcLocation, code.indexOf(endChar, funcLocation) + endChar.length);
    }

    findGetter(code, field, get) {
        return this.findFunction(code, get || this.generateGetterFuncName(field))
    }

    findSetter(code, field, set) {
        return this.findFunction(code, set || this.generateSetterFuncName(field))
    }
}