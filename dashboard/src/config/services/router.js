import {Router} from 'tramway-core-router';
import ReactRouterStrategy from 'tramway-router-react-strategy';
import {app} from '../../App';

export default {
    "router": {
        "class": Router,
        "constructor": [
            {"type": "parameter", "key": "routes"},
            {"type": "service", "key": "react-router-strategy"},
            app('dashboard').getDependencyResolver(),
        ],
    },
    "react-router-strategy": {
        "class": ReactRouterStrategy,
        "constructor": [],
        "functions": []
    }
}
