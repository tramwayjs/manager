import {
    MainController, 
    LibrariesController,
} from '../../controllers';

export default {
    "controller.main": {
        "class": MainController,
        "constructor": [
            {"type": "service", "key": "router"}
        ],
        "functions": []
    },
    "controller.libraries": {
        "class": LibrariesController,
        "constructor": [
            {"type": "service", "key": "router"}
        ],
        "functions": []
    },
};