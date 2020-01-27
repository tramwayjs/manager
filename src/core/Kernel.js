import ChildProcess from 'child_process';
import { messages } from '@tramwayjs/core';
import State from './State';

const { Command, Data, MessageFactory } = messages;

export default class Kernel {
    constructor() {
        this.appProcess = ChildProcess.fork(require.resolve('./init'));
        this.messageFactory = new MessageFactory();
        this.registerEvents();
    }

    registerEvents() {
        this.appProcess.on('message', async message => await this.handleMessage(message));
    }

    async start() {
        return new Promise((resolve, reject) => {
            this.appProcess.send(new Command('start'), err => {
                if(err) {
                    return reject(err);
                }

                return resolve(this);
            });
        })
    }

    async stop() {
        return new Promise((resolve, reject) => {
            this.appProcess.send(new Command('stop'), err => {
                if(err) {
                    return reject(err);
                }

                return resolve(this);
            });
        });
    }

    async restart() {
        return new Promise((resolve, reject) => {
            this.appProcess.send(new Command('restart'), err => {
                if(err) {
                    return reject(err);
                }

                return resolve(this);
            });
        });
    }

    async getApplicationState() {
        return new Promise((resolve, reject) => {
            this.appProcess.send(new Command('state'), err => {
                if(err) {
                    return reject(err);
                }

                this.state = new State(null, state => state && resolve(state));
            });
        });
    }

    async handleMessage(message) {
        message = this.messageFactory.init(message);

        if (message instanceof Command) {
            switch(message.getValue()) {
                case 'state': this.manager.getClientApplicationState(); break;
                case 'start': this.manager.startClient(); break;
                case 'stop': this.manager.stopClient(); break;
            }
        }

        if (message instanceof Data) {
            this.state.setValue(message.getValue());
        }
    }

    setManager(manager) {
        this.manager = manager;
        return this;
    }

    setClientApplicationState(state) {
        this.appProcess.send(new Data(state));
        return this;
    }
}