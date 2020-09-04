import {controllers, HttpStatus} from 'tramway-core-router';
const {RestfulController} = controllers;

export default class EntitiesController extends RestfulController {
    constructor(router, service, formatter, logger) {
        super(router, service, formatter, logger);
    }

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
        const {className, parentClassName, parentClassImport} = req.body;
        let item;

        try {
            item = await this.service.create({className, parentClassName, parentClassImport}, true);
        } catch(e) {
            this.logger.error(e.stack)
            return res.sendStatus(HttpStatus.BAD_REQUEST);
        }

        return res.sendStatus(HttpStatus.NO_CONTENT);
    }

    async update(req, res, next) {
        const {className: currentClassName} = req.params;
        const {className, parentClassName, parentClassImport} = req.body;

        let item;

        try {
            item = await this.service.update(currentClassName, {className, parentClassName, parentClassImport}, true);
        } catch(e) {
            this.logger.error(e.stack)
            return res.sendStatus(HttpStatus.BAD_REQUEST);
        }

        return res.sendStatus(HttpStatus.NO_CONTENT);
    }

    async delete(req, res, next) {
        const {className} = req.params;

        try {
            await this.service.delete(className);
        } catch(e) {
            this.logger.error(e.stack)
            return res.sendStatus(HttpStatus.NOT_FOUND);
        }

        return res.sendStatus(HttpStatus.NO_CONTENT);
    }

    async createField(req, res, next) {
        const {className} = req.params;
        let {field, get, set} = req.body || {};
        let item;

        try {
            item = await this.service.createField(className, {field, get, set}, true);
        } catch(e) {
            this.logger.error(e.stack)
            return res.sendStatus(HttpStatus.BAD_REQUEST);
        }

        return res.sendStatus(HttpStatus.NO_CONTENT);
    }

    async replaceField(req, res, next) {
        const {className, fieldName} = req.params;
        let {field, get, set} = req.body || {};
        let item;

        try {
            item = await this.service.replaceField(className, fieldName, field, get, set);
        } catch(e) {
            this.logger.error(e.stack)
            return res.sendStatus(HttpStatus.BAD_REQUEST);
        }

        return res.sendStatus(HttpStatus.NO_CONTENT);
    }

    async deleteField(req, res, next) {
        const {className, fieldName} = req.params;
        let item;

        try {
            item = await this.service.deleteField(className, fieldName);
        } catch(e) {
            this.logger.error(e.stack)
            return res.sendStatus(HttpStatus.BAD_REQUEST);
        }

        return res.sendStatus(HttpStatus.NO_CONTENT);
    }

}