import { controllers, HttpStatus } from 'tramway-core-router';
const {RestfulController} = controllers;

export default class DependencyInjectionController extends RestfulController {
    constructor(router, dependencyInjectionRepository, logger, formatter, appService) {
        super(router, null, logger, formatter);

        this.dependencyInjectionRepository = dependencyInjectionRepository;
        this.appService = appService;
    }

    async get(req, res, next) {
        const services = await this.dependencyInjectionRepository.getServices();
        const {parameters, instances} = await this.appService.getHostApplicationState();

        return res.json({parameters, services, instances})
    }

    async getOne(req, res, next) {
        const {key} = req.params;

        const service = await this.dependencyInjectionRepository.getService(key);

        if (!service) {
            return res.sendStatus(HttpStatus.NOT_FOUND);
        }
        
        const className = service.class;
        const constructor = service.constructor;
        const functions = service.functions;

        let services = await Promise.all(constructor.map(async item => {
            const {key, type} = item;

            if ('service' !== type) {
                return;
            }

            return [key, await this.dependencyInjectionRepository.getService(key)];
        }));

        const {parameters: allParameters} = await this.appService.getHostApplicationState();

        let parameters = constructor.filter(item => 'service' !== item.type).map(({key}) => {
            const parameter = allParameters[key];

            if (parameter instanceof Function) {
                return [key, `${parameter.name}()`];
            }

            return [key, parameter];
        });

        services = Object.fromEntries(services.filter(i => i));
        parameters = Object.fromEntries(parameters.filter(i => i));

        return res.json({className, services, functions, parameters, serviceConfig: service})
    }
}