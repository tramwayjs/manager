import {controllers, HttpStatus} from 'tramway-core-router';
const {RestfulController} = controllers;

export default class SystemController extends RestfulController {
    constructor(router, service, logger, formatter, appManager) {
        super(router, service, logger, formatter);
        this.appManager = appManager;
    }

    async get(req, res, next) {
        const system = await this.service.getSystemStats();
        let appUsage;
        
        try {
            const {processId} = await this.appManager.getHostApplicationState();
            appUsage = await this.service.getProcessStats(processId);
        } catch(e) {
            return res.sendStatus(HttpStatus.GONE);
        }

        return res.json({system, appUsage});
    }
}