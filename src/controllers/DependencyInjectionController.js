import { Dependencies } from '../components/pages';
import {controllers} from 'tramway-core-react';
import { Controller } from 'tramway-core-router';
import fs from 'fs';

const {ReactController} = controllers;

export default class DependencyInjectionController extends Controller {
    constructor(router, configParser) {
        super(router);

        this.configParser = configParser;
    }

    async index(req, res, next) {
        const baseDir = 'src/config/services';

        let services = await new Promise((resolve, reject) => fs.readdir(baseDir, (err, files) => err ? reject(err) : resolve(files)));
        services = services.filter(file => !['index.js'].includes(file));
        services = await Promise.all(services.map(async file => await new Promise((resolve, reject) => fs.readFile(`${baseDir}/${file}`, (err, data) => err ? reject(err) : resolve(data)))));
        services = services.map(file => this.configParser.getJSONFromServices(file.toString()));
        services = services.reduce((accumulator, item) => {
            return {...accumulator, ...item};
        }, {});

        return ReactController.render(res, Dependencies, {services})
    }
}