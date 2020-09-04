import HATEAOSFormatter, { HATEAOSEntityFactory } from 'tramway-formatter-hateaos';

import {
    ConfigParser,
    AppManager,
    SystemService,
    LogsParser,
    EntitiesParser,
    TemplateService,
    FactoriesParser,
    EntityService,
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
    "service.system": {
        "class": SystemService,
    },
    "service.logs": {
        "class": LogsParser,
    },
    "entity-parser": {
        "class": EntitiesParser,
    },
    "factory-parser": {
        "class": FactoriesParser,
    },
    "service.template": {
        "class": TemplateService,
        "constructor": [
            {"type": "service", "key": "provider.file"},
        ]
    },
    "service.entity": {
        "class": EntityService,
        "constructor": [
            {"type": "service", "key": "repository.entity"},
            {"type": "service", "key": "repository.factory"},
        ]
    },
};