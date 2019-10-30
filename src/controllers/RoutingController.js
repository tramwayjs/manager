import { Routing } from '../components/pages';
import {controllers} from 'tramway-core-react';
import { Controller } from 'tramway-core-router';
import fs from 'fs';

const {ReactController} = controllers;
 
export default class RoutingController extends Controller {
    constructor(router, configParser) {
        super(router);

        this.configParser = configParser;
    }

    async index(req, res, next) {
        let file = await new Promise((resolve, reject) => fs.readFile('src/config/parameters/global/routes.js', (err, data) => err ? reject(err) : resolve(data)));
        
        const routes = this.configParser.getJSONFromConfig(file.toString());
        
        return ReactController.render(res, Routing, {routes});
    }
}