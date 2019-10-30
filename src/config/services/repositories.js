import {
    DependenciesRepository
} from '../../repositories';

export default {
    "repository.dependencies": {
        "class": DependenciesRepository,
        "constructor": [
            {"type": "service", "key": "config-parser"},
        ],
        "functions": []
    },
};