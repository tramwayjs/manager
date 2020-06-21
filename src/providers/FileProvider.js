import {promises as fs} from 'fs';
import mkdirp from 'mkdirp';
import path from 'path';

//TODO: Move to own installable library
export default class FileProvider {
    async get(options) {
        return await this.query({}, options);
    }

    async query(criteria = {}, options = {}) {
        const {dir} = options;

        let files = await this.getFiles(dir);

        const {exclusions = [], inclusions = []} = criteria;

        if (exclusions.length) {
            files = files.filter(file => !exclusions.includes(file));
        }

        if (inclusions.length) {
            files = files.filter(file => inclusions.includes(file));
        }

        return await this.readFiles(dir, files);
    }

    async getOne(id, options) {
        return await this.query({
            inclusions: [id],
        }, options);
    }

    async create(item = {}, options = {}) {
        const {id, data} = item;
        return await this.update(id, data, options);
    }

    async update(id, data, options = {}) {
        const {dir, ext} = options;
        const filePath = path.join(dir, id);

        try {
            return await this.writeFile(filePath, data, ext);
        } catch(e) {
            console.log(e)
            if (e.message.includes('no such file or directory')) {
                mkdirp.sync(dir);
                return await this.writeFile(filePath, data, ext);
            }

            throw e;
        }
    }

    async delete(id, options = {}) {
        const {dir, ext} = options;

        try {
            return await this.deleteFile(`${path.join(dir, id)}.${ext}`);
        } catch(e) {
            throw e;
        }
    }

    async getFiles(dir) {
        return await fs.readdir(dir);
    }

    async deleteFile(file) {
        return await fs.unlink(file);
    }

    async readFile(file) {
        return await fs.readFile(file);
    }

    async readFiles(dir, files = []) {
        files = files.map(async id => ({id, data: await this.readFile(path.join(dir, id))}));
        return await Promise.all(files);
    }

    async writeFile(file, contents, ext = 'js') {
        return await fs.writeFile(`${file}.${ext}`, contents);
    }
}