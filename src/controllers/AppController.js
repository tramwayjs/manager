import {controllers, HttpStatus} from 'tramway-core-router';
const {RestfulController} = controllers;

export default class AppController extends RestfulController {
    constructor(router, service, logger, formatter) {
        super(router, service, logger, formatter);
    }

    async get(req, res, next) {
        const result = await this.service.getHostApplicationState();
        return res.json(result);
    }
    
    async update(req, res, next) {
        const {state} = req.body;

        switch (state) {
            case 'active': this.service.startApp(); break;
            case 'stopped': this.service.stopApp(); break;
            default: return res.status(HttpStatus.BAD_REQUEST).send('Invalid state passed');
        }

        return res.sendStatus(HttpStatus.NO_CONTENT);
    }
}