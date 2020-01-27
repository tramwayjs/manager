import fs from 'fs';

export default class DependenciesRepository {
    constructor(configParser) {
        this.configParser = configParser;
    }

    async getServices(filter) {
        if (!this.services) {
            const baseDir = 'src/config/services';
    
            let services = await new Promise((resolve, reject) => fs.readdir(baseDir, (err, files) => err ? reject(err) : resolve(files)));
            services = services.filter(file => !['index.js'].includes(file));
            services = await Promise.all(services.map(async file => await new Promise((resolve, reject) => fs.readFile(`${baseDir}/${file}`, (err, data) => err ? reject(err) : resolve(data)))));
            services = services.map(file => this.configParser.getJSONFromServices(file.toString()));
            services = services.reduce((accumulator, item) => {
                return {...accumulator, ...item};
            }, {});
    
            this.services = services;
        }

        if (filter) {
            return Object.entries(this.services)
                .filter(([key]) => {
                    const [type, ...spec] = key.split('.');

                    if ('service' === filter && !spec.length) {
                        return true;
                    }

                    return type === filter;
                })
                .reduce((accumulator, [key, service]) => {
                    return {
                        ...accumulator, 
                        [key]: service,
                    };
                }, {});
        }

        return this.services;
    }

    async getService(key) {        
        if (!this.servicesConfig) {
            await this.getServices();
        }

        return this.services[key];
    }
}