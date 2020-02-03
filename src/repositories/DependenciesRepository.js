export default class DependenciesRepository {
    constructor(provider, configParser) {
        this.provider = provider;
        this.configParser = configParser;
    }

    async get() {
        if (!this.services) {
            this.services = await this.getServices();
        }

        return this.services;
    }

    async getOne(key) {        
        if (!this.services) {
            await this.get();
        }

        return this.services[key];
    }

    async query(filter = {}) {
        const {type} = filter;
        let services = await this.get();

        if (type) {
            services = Object.entries(services)
                .filter(([key]) => {
                    const [prefix, ...spec] = key.split('.');

                    if ('service' === prefix && !spec.length) {
                        return true;
                    }

                    return type === prefix;
                })
                .reduce((accumulator, [key, service]) => {
                    return {
                        ...accumulator, 
                        [key]: service,
                    };
                }, {});
        }

        return services;
    }

    async getServices() {
        let options = {
            exclusions: ['index.js'],   
        };

        let services = await this.provider.query(options);
        services = services.map(({data}) => this.configParser.getJSONFromServices(data.toString()));

        services = services.reduce((accumulator, item) => {
            return {...accumulator, ...item};
        }, {});
        return services;
    }
}