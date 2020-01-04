export default class AppManager {
    setApp(app) {
        this.app = app;
        return this;
    }

    getApp() {
        return this.app;
    }

    startApp() {
        if (!this.app) {
            throw new Error('App must be passed to the Manager');
        }

        this.server = this.app.start();
        this.server.on('close', () => {
            this.app.terminate();
        });
    }

    stopApp() {
        if (!this.server) {
            throw new Error('App must be started in order to be stopped');
        }

        this.server.close();
    }

    async getHostApplicationState() {
        return await this.app.getHostApplicationState();
    }
}