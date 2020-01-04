import {controllers} from 'tramway-core-router';
import fs from 'fs';
import latestVersion from 'latest-version';
const {RestfulController} = controllers;

export default class LibrariesController extends RestfulController {
    constructor(router, logger, formatter) {
        super(router, null, logger, formatter);
    }
    
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

        return res.json({dependencies, devDependencies, updates});
    }
}