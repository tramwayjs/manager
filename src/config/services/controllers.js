import {
    MainController, 
    LibrariesController,
    RoutingController,
    DependencyInjectionController,
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
    "controller.routing": {
        "class": RoutingController,
        "constructor": [
            {"type": "service", "key": "router"},
            {"type": "service", "key": "config-parser"},
        ],
        "functions": []
    },
    "controller.dependency-injection": {
        "class": DependencyInjectionController,
        "constructor": [
            {"type": "service", "key": "router"},
            {"type": "service", "key": "config-parser"},
        ],
        "functions": []
    },
};