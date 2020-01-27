import fs from 'fs';
import readline from 'readline';

export default class LogsParser {
    async getLogs(limit = 20) {
        const baseDir = 'logs';
    
        let logs = await new Promise((resolve, reject) => fs.readdir(baseDir, (err, files) => err ? reject(err) : resolve(files)));
        logs = await Promise.all(logs.map(async file => ({file, data: await this.getLogsForFile(file, limit)})));
        logs = logs.reduce((accumulator, {file, data}) => {
            return {...accumulator, [file]: data}
        }, {})
        return logs;
    }

    async getLogsForFile(file, limit = 20) {
        const baseDir = 'logs';
        let logs = [];

        const readInterface = readline.createInterface({
            input: fs.createReadStream(`${baseDir}/${file}`),
            crlfDelay: Infinity,
        });

        for await (const line of readInterface) {
            if (logs.length >= limit) {
                logs.shift();
            }

            logs.push(JSON.parse(line));
        }

        return logs.reverse();
    }

}