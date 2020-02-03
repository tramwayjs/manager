import {controllers, HttpStatus} from 'tramway-core-router';
const {RestfulController} = controllers;

export default class EntitiesController extends RestfulController {
    async get(req, res, next) {
        let entities;

        try {
            entities = await this.service.get();
        } catch(e) {
            this.logger.error(e.stack)
            return res.sendStatus(HttpStatus.GONE);
        }

        return res.json({entities});
    }

    async getOne(req, res, next) {
        const {className} = req.params;
        let entity;

        try {
            entity = await this.service.getOne(className);
        } catch(e) {
            this.logger.error(e.stack)
            return res.sendStatus(HttpStatus.NOT_FOUND);
        }

        return res.json(entity);
    }

    async create(req, res, next) {

    }

    async update(req, res, next) {

    }

    async createField(req, res, next) {
        const {className} = req.params;
        let {field, get, set} = req.body || {};
        let item;

        try {
            item = await this.service.createField(className, {field, get, set});
        } catch(e) {
            this.logger.error(e.stack)
            return res.sendStatus(HttpStatus.BAD_REQUEST);
        }

        return res.sendStatus(HttpStatus.NO_CONTENT);
    }


}