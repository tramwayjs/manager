import {
    FileProvider,
} from '../../providers';

export default {
    "provider.file:entity": {
        "class": FileProvider,
        "constructor": [
            {"type": "parameter", "key": "entityFileConfig"},
        ],
        "functions": []
    },
    "provider.file:dependency": {
        "class": FileProvider,
        "constructor": [
            {"type": "parameter", "key": "dependencyFileConfig"},
        ],
        "functions": []
    },
};