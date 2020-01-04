import { AbstractManager, Initiator } from '@tramwayjs/core';
import Kernel from './Kernel';

export default class ClientManager extends AbstractManager {
    constructor(eventEmitter, clientEventEmitter, kernel) {
        super(eventEmitter);
        this.clientEventEmitter = clientEventEmitter;
        this.kernel = kernel;
    }

    static init(clientEventEmitter) {
        const kernel = new Kernel();
        const initiator = new Initiator(kernel);
        let manager = new ClientManager(initiator.getEventEmitter(), clientEventEmitter, kernel).registerKernel().registerEvents();
        
        initiator.addManager('client', manager);
        manager.start();

        return manager;
    }

    registerKernel() {
        this.kernel.setManager(this);
        return this;
    }

    registerEvents() {        
        this.clientEventEmitter.on(AbstractManager.EVENT_SERVER_STARTED, () => this.updateStatus(AbstractManager.EVENT_SERVER_STARTED))
        this.clientEventEmitter.on(AbstractManager.EVENT_SERVER_STOPPED, () => this.updateStatus(AbstractManager.EVENT_SERVER_STOPPED));
        this.clientEventEmitter.on(AbstractManager.EVENT_STATE_RETRIEVED, state => this.handleClientApplicationStateRetrieved(state))
        return this;
    }

    updateStatus(status) {
        this.status = status;
    }

    handleClientApplicationStateRetrieved(state) {
        this.kernel.setClientApplicationState(state);
    }

    start() {
        this.eventEmitter.emit(AbstractManager.EVENT_SERVER_START);
    }

    startClient() {
        this.clientEventEmitter.emit(AbstractManager.EVENT_SERVER_START);
    }

    stopClient() {
        this.clientEventEmitter.emit(AbstractManager.EVENT_SERVER_STOP);
    }

    restartClient() {
        this.clientEventEmitter.emit(AbstractManager.EVENT_SERVER_RESTART);
    }

    getClientApplicationState() {
        this.clientEventEmitter.emit(AbstractManager.EVENT_STATE_REQUESTED);
    }
}