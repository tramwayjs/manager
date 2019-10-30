import { Libraries } from '../components/pages';
import {controllers} from 'tramway-core-react';
import { Controller } from 'tramway-core-router';
import fs from 'fs';
import latestVersion from 'latest-version';

const {ReactController} = controllers;

export default class LibrariesController extends Controller {
    async index(req, res, next) {
        let pg = await new Promise((resolve, reject) => fs.readFile('package.json', (err, data) => err ? reject(err) : resolve(data)));
        
        const packageContents = JSON.parse(pg.toString());
        const {dependencies, devDependencies} = packageContents;

        let updates = {};
        for (let [library, version] of Object.entries({...dependencies, ...devDependencies})) {
            try {
                updates[library] = await latestVersion(library);
            } catch(e) {
                updates[library] = version;
            }
        }
        
        return ReactController.render(res, Libraries, {dependencies, devDependencies, updates});
    }
}