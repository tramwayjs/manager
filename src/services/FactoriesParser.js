const SEPARATOR = `    `;

export default class FactoriesParser {
    parseFactory(contents) {
        return {
            entityClassName: this.findEntityClassName(contents),
            code: contents,
            ... this.findClassInfo(contents),
        }
    }

    findEntityClassName(contents) {
        let create = this.findFunction(contents, 'create');
        const [entityClassName] = create.match(/return\s*new\s*(\w*)\(/) || [];
        return entityClassName;
    }

    findClassInfo(contents) {
        const [full, className, extendsPiece, baseClassName] = contents.match(/class\s*(\w*)(\s*extends\s*(\w*))?/) || [];
        
        return {className, baseClassName};
    }

    findFunction(code, func) {
        const funcLocation = code.indexOf(`\n${this.generateSpacer(1)}${func}`);
        const endChar = "}\n";
        
        return code.substring(funcLocation, code.indexOf(endChar, funcLocation) + endChar.length);
    }

    generateSpacer(count = 1) {
        return SEPARATOR.repeat(count)
    }

    generateSetFunctionChain(field, set) {
        return `\n${this.generateSpacer(3)}.${set}(${field})`;
    }

    generateSetFunctionNewLine() {
        return `\n${this.generateSpacer(2)}`;
    }

    generateField(field) {
        return `\n${this.generateSpacer(3)}${field},`;
    }
}