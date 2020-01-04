import { App, messages } from '@tramwayjs/core';
import State from './State';

const { Command, Data } = messages;

export default class Manager extends App {
    static init(name, services, parameters) {
        const app = new Manager(name, services, parameters).initialize();

        process.on('message', async message => await app.handleMessage(message));

        return app;
    }

    async handleMessage(message) {
        message = this.messageFactory.init(message);

        if (message instanceof Command) {
            await this.execute(message.getValue());
        }

        if (message instanceof Data) {
            if (this.state) {
                this.state.setValue(message.getValue());
            }
        }
    }

    initialize() {
        super.initialize();
        this.di.getService('service.app-manager').setApp(this);
        return this;
    }

    async getHostApplicationState() {
        return new Promise((resolve, reject) => {
            return process.send(new Command('state'), err => {
                if(err) {
                    return reject(err);
                }
    
                this.state = new State(null, state => state && resolve(state));
            });
        });
    }

    async execute(command) {
        switch(command) {
            case 'start': return await this.start();
            case 'stop': return await this.stop();
            case 'restart': return await this.restart();
        }
    }

}