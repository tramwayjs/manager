import {controllers, HttpStatus} from 'tramway-core-router';
const {RestfulController} = controllers;

export default class AppController extends RestfulController {
    constructor(router, service, logger, formatter) {
        super(router, service, logger, formatter);
    }

    async get(req, res, next) {
        let result;

        try {
            result = await this.service.getHostApplicationState();
        } catch(e) {
            return res.sendStatus(HttpStatus.GONE);
        }
        
        return res.json(result);
    }
    
    async update(req, res, next) {
        const {state} = req.body;

        switch (state) {
            case 'active': await this.service.startHost(); break;
            case 'stopped': await this.service.stopHost(); break;
            default: return res.status(HttpStatus.BAD_REQUEST).send('Invalid state passed');
        }

        return res.sendStatus(HttpStatus.NO_CONTENT);
    }
}