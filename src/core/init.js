import Manager from './Manager';
import {name, services, parameters} from '../config';

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1)
}

Manager.init(name, services, parameters);