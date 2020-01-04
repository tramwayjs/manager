import HATEAOSFormatter, { HATEAOSEntityFactory } from 'tramway-formatter-hateaos';

import {
    ConfigParser,
    AppManager,
} from '../../services';

export default {
    "config-parser": {
        "class": ConfigParser,
        "constructor": [],
        "functions": []
    },
    "service.formatter": {
        "class": HATEAOSFormatter,
        "constructor": [
            {"type": "service", "key": "factory.hateaos"}
        ]
    },
    "factory.hateaos": {
        "class": HATEAOSEntityFactory,
    },
    "service.app-manager": {
        "class": AppManager,
    },
};