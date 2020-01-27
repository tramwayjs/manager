import os from 'os';
import pidusage from 'pidusage';

export default class SystemService {
    getSystemStats() {
        return {
            platform: os.platform(),
            release: os.release(),
            memory: os.totalmem(),
            memoryAvailable: os.freemem(),
            uptime: os.uptime(),
        }
    }

    async getProcessStats(processId) {
        return new Promise((resolve, reject) => {
            return pidusage(processId, (err, stats) => {
                if (err) {
                    return reject(err);
                }

                return resolve(stats);
            });
        });
    }
}