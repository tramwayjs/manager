import {controllers, HttpStatus} from 'tramway-core-router';
const {RestfulController} = controllers;

export default class LogsController extends RestfulController {
    constructor(router, service, logger, formatter) {
        super(router, service, logger, formatter);
    }

    async get(req, res, next) {
        const {limit} = req.query;

        let logs = await this.service.getLogs(limit);
        return res.json(logs);
    }
}