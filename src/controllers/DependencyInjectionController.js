import { Dependencies, Dependency } from '../components/pages';
import {controllers} from 'tramway-core-react';
import { Controller, HttpStatus } from 'tramway-core-router';

const {ReactController} = controllers;

export default class DependencyInjectionController extends Controller {
    constructor(router, dependencyInjectionRepository) {
        super(router);

        this.dependencyInjectionRepository = dependencyInjectionRepository;
    }

    async index(req, res, next) {
        const services = await this.dependencyInjectionRepository.getServices();

        return ReactController.render(res, Dependencies, {services});
    }

    async getOne(req, res, next) {
        const {key} = req.params;

        const service = await this.dependencyInjectionRepository.getService(key);

        if (!service) {
            return res.sendStatus(HttpStatus.NOT_FOUND);
        }

        const {class: className, constructor, functions} = service;

        let services = await Promise.all(constructor.map(async item => {
            const {key, type} = item;

            if ('service' !== type) {
                return;
            }

            return [key, await this.dependencyInjectionRepository.getService(key)];
        }));

        let parameters = constructor.filter(item => 'parameter' === item.type);

        services = Object.fromEntries(services.filter(i => i));

        return ReactController.render(res, Dependency, {className, services, functions, parameters})
    }
}