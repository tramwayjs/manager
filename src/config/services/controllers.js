import {
    MainController, 
    LibrariesController,
    RoutingController,
    DependencyInjectionController,
    AppController,
    SystemController,
    LogsController,
} from '../../controllers';

export default {
    "controller.main": {
        "class": MainController,
        "constructor": [
            {"type": "service", "key": "router"},
            {"type": "service", "key": "logger"},
            {"type": "service", "key": "service.formatter"},
            {"type": "parameter", "key": "staticRouteMiddleware"},
        ],
        "functions": []
    },
    "controller.libraries": {
        "class": LibrariesController,
        "constructor": [
            {"type": "service", "key": "router"},
            {"type": "service", "key": "logger"},
            {"type": "service", "key": "service.formatter"},
        ],
        "functions": []
    },
    "controller.routing": {
        "class": RoutingController,
        "constructor": [
            {"type": "service", "key": "router"},
            {"type": "service", "key": "config-parser"},
            {"type": "service", "key": "logger"},
            {"type": "service", "key": "service.formatter"},
        ],
        "functions": []
    },
    "controller.dependency-injection": {
        "class": DependencyInjectionController,
        "constructor": [
            {"type": "service", "key": "router"},
            {"type": "service", "key": "repository.dependencies"},
            {"type": "service", "key": "logger"},
            {"type": "service", "key": "service.formatter"},
            {"type": "service", "key": "service.app-manager"},
        ],
        "functions": []
    },
    "controller.app": {
        "class": AppController,
        "constructor": [
            {"type": "service", "key": "router"},
            {"type": "service", "key": "service.app-manager"},
            {"type": "service", "key": "logger"},
            {"type": "service", "key": "service.formatter"},
        ],
        "functions": []
    },
    "controller.system": {
        "class": SystemController,
        "constructor": [
            {"type": "service", "key": "router"},
            {"type": "service", "key": "service.system"},
            {"type": "service", "key": "logger"},
            {"type": "service", "key": "service.formatter"},
            {"type": "service", "key": "service.app-manager"},
        ],
        "functions": []
    },
    "controller.logs": {
        "class": LogsController,
        "constructor": [
            {"type": "service", "key": "router"},
            {"type": "service", "key": "service.logs"},
            {"type": "service", "key": "logger"},
            {"type": "service", "key": "service.formatter"},
        ],
        "functions": []
    },
};