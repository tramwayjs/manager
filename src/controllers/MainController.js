import {controllers} from 'tramway-core-router';
import path from 'path';

const {RestfulController} = controllers;

export default class MainController extends RestfulController {
    constructor(router, logger, formatter) {
        super(router, null, logger, formatter);
    }

    async index(req, res) {
        return res.sendFile(path.resolve(__dirname, '../../dashboard/build/index.html'));
    }
}