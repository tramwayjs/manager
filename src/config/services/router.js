import {Router, strategies} from 'tramway-core-router';
import {createDependencyResolver} from '@tramwayjs/dependency-injector';
import {name} from '../meta';

const {ExpressServerStrategy} = strategies;

export default {
    "router": {
        "class": Router,
        "constructor": [
            {"type": "parameter", "key": "routes"},
            {"type": "service", "key": "express-router-strategy"},
            createDependencyResolver(name)
        ],
    },
    "express-router-strategy": {
        "class": ExpressServerStrategy,
        "constructor": [
            {"type": "parameter", "key": "app"},
        ]
    }
}