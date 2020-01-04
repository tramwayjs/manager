export default class ConfigParser {
    getJSONFromConfig(file) {
        file = file
            .replace('=', '__DELIMETER__')
            .replace(';', '__DELIMETER__')
        ;

        let [declaration, items, ...remainder] = file.split('__DELIMETER__');

        items = items
            .replace(/,\s*]/, ']')
            .replace(/\'/g, '"')
        ;

        return JSON.parse(items);
    }

    getJSONFromServices(file) {
        file = file
            .replace('export default', '__DELIMETER__')
        ;

        let [declaration, items, ...remainder] = file.split('__DELIMETER__');
        
        items = items
            .replace(/createDependencyResolver\(name\)/, '')
            .replace(/DependencyResolver/, '')
            .replace(/app\(\"*\'*\`*\w*\`*\'*\"*\)\.get\(\)/, '')
            .replace(/,\n*\s*]/g, ']')
            .replace(/,\n*};/g, '};')
            .replace(/],\n*\s*}/g, ']}')
            .replace(/},\n*\s*]/g, '}]')
            .replace(/},\n*\s*}/g, '}}')
            .replace(/],\n*\s*]/g, ']]')
            .replace(';', '')
            .replace(/class\":\s*/g, 'class": "')
            .replace(/,\n\s*\"constructor"/g, `",\n"constructor"`)
            .replace(/\'/g, '"')
        ;
        
        return JSON.parse(items.trim());
    }
}