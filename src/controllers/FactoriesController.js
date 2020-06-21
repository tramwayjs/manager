import {controllers, HttpStatus} from 'tramway-core-router';
const {RestfulController} = controllers;

export default class FactoriesController extends RestfulController {
    async get(req, res, next) {
        let factory;

        try {
            factory = await this.service.get();
        } catch(e) {
            this.logger.error(e.stack)
            return res.sendStatus(HttpStatus.GONE);
        }

        return res.json({factory});
    }

    async getOne(req, res, next) {
        const {className} = req.params;
        let factory;

        try {
            factory = await this.service.getOne(className);
        } catch(e) {
            this.logger.error(e.stack)
            return res.sendStatus(HttpStatus.NOT_FOUND);
        }

        return res.json(factory);
    }
}