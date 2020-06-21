import {
    DependenciesRepository,
    EntityRepository,
    FactoryRepository,
} from '../../repositories';

export default {
    "repository.dependencies": {
        "class": DependenciesRepository,
        "constructor": [
            {"type": "service", "key": "provider.file"},
            {"type": "service", "key": "config-parser"},
            {"type": "parameter", "key": "dependencyFileConfig"},
        ],
        "functions": []
    },
    "repository.entity": {
        "class": EntityRepository,
        "constructor": [
            {"type": "service", "key": "provider.file"},
            {"type": "service", "key": "entity-parser"},
            {"type": "service", "key": "service.template"},
            {"type": "parameter", "key": "entityFileConfig"},
        ],
        "functions": []
    },
    "repository.factory": {
        "class": FactoryRepository,
        "constructor": [
            {"type": "service", "key": "provider.file"},
            {"type": "service", "key": "factory-parser"},
            {"type": "service", "key": "service.template"},
            {"type": "parameter", "key": "factoryFileConfig"},
        ],
        "functions": []
    },
};