import {createDependencyResolver} from '@tramwayjs/dependency-injector';

var manager = new Map();

export default class App {
    constructor(name) {
        this.name = name;
        const instance = manager.get(name);

        if (instance) {
            return instance;
        }

        manager.set(name, this);
    }

    static initialize(name, services, parameters) {
        return new App(name).initialize(services, parameters);
    }
    
    initialize(services, parameters) {
        this.di = createDependencyResolver(this.name).initialize(services, parameters);
        return this;
    }

    start() {
        let app = this.di.getService('app');
        return app.initialize().start();
    }

    getDependencyResolver() {
        return this.di || createDependencyResolver(this.name);
    }
}

export function app(name) {
    const instance = manager.get(name);

    if (instance) {
        return instance;
    }

    return new App(name);
}