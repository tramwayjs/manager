import {promises as fs} from 'fs';
import mkdirp from 'mkdirp';

//TODO: Move to own installable library
export default class FileProvider {
    constructor(options = {}) {
        this.options = options;
    }

    async get() {
        return await this.query();
    }

    async query(options = {}) {
        const {dir} = this.options;

        let files = await this.getFiles(dir);

        const {exclusions = [], inclusions = []} = options;

        if (exclusions.length) {
            files = files.filter(file => !exclusions.includes(file));
        }

        if (inclusions.length) {
            files = files.filter(file => inclusions.includes(file));
        }

        return await this.readFiles(dir, files);
    }

    async getOne(id) {
        return await this.query({
            inclusions: [id],
        });
    }

    async create(item = {}) {
        const {id, data} = item;
        return await this.update(id, data);
    }

    async update(id, data) {
        const {dir, ext} = this.options;
        try {
            return await this.writeFile(`${dir}/${id}`, data, ext);
        } catch(e) {
            if (e.message.includes('no such file or directory')) {
                mkdirp.sync(dir);
                return await this.writeFile(`${dir}/${id}`, data, ext);
            }

            throw e;
        }
    }
    

    async getFiles(dir) {
        return await fs.readdir(dir);
    }

    async readFiles(dir, files = []) {
        files = files.map(async id => ({id, data: await fs.readFile(`${dir}/${id}`)}));
        return await Promise.all(files);
    }

    async writeFile(file, contents, ext = 'js') {
        return await fs.writeFile(`${file}.${ext}`, contents);
    }
}