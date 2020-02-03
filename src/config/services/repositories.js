import {
    DependenciesRepository,
    EntityRepository,
} from '../../repositories';

export default {
    "repository.dependencies": {
        "class": DependenciesRepository,
        "constructor": [
            {"type": "service", "key": "provider.file:dependency"},
            {"type": "service", "key": "config-parser"},
        ],
        "functions": []
    },
    "repository.entity": {
        "class": EntityRepository,
        "constructor": [
            {"type": "service", "key": "provider.file:entity"},
            {"type": "service", "key": "entity-parser"},
        ],
        "functions": []
    },
};