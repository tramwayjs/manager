import { Libraries } from '../components/pages';
import {controllers} from 'tramway-core-react';
import { Controller } from 'tramway-core-router';
import fs from 'fs';

const {ReactController} = controllers;

export default class LibrariesController extends Controller {
    async index(req, res, next) {
        let pg = await new Promise((resolve, reject) => fs.readFile('package.json', (err, data) => err ? reject(err) : resolve(data)));
        const message = JSON.stringify(JSON.parse(pg.toString()), 4);
        
        return ReactController.render(res, Libraries, {message})
    }
}