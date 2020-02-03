import {
    DashboardController,
    LibrariesController,
    DependencyInjectionController,
    DependencyInspectionController,
    RoutingController,
    ParametersController,
    PageNotFoundController,
    ServicesController,
    LogsController,
    EntitiesController,
    EntityController,
} from '../../controllers';

import {withDependencyInjection} from 'tramway-router-react-strategy';

export default {
    "controller.dashboard": {
        "class": withDependencyInjection(DashboardController),
        "constructor": [],
    },
    "controller.libraries": {
        "class": withDependencyInjection(LibrariesController),
        "constructor": [],
    },
    "controller.dependency-injection": {
        "class": withDependencyInjection(DependencyInjectionController),
        "constructor": [],
    },
    "controller.parameters": {
        "class": withDependencyInjection(ParametersController),
        "constructor": [],
    },
    "controller.services": {
        "class": withDependencyInjection(ServicesController),
        "constructor": [
            'service',
        ],
    },
    "controller.policies": {
        "class": withDependencyInjection(ServicesController),
        "constructor": [
            'policy',
        ],
    },
    "controller.controllers": {
        "class": withDependencyInjection(ServicesController),
        "constructor": [
            'controller',
        ],
    },
    "controller.repositories": {
        "class": withDependencyInjection(ServicesController),
        "constructor": [
            'repository',
        ],
    },
    "controller.factories": {
        "class": withDependencyInjection(ServicesController),
        "constructor": [
            'factory',
        ],
    },
    "controller.entities": {
        "class": withDependencyInjection(EntitiesController),
        "constructor": [
            'entity',
        ],
    },
    "controller.entity": {
        "class": withDependencyInjection(EntityController),
        "constructor": [
            'entity',
        ],
    },
    "controller.providers": {
        "class": withDependencyInjection(ServicesController),
        "constructor": [
            'provider',
        ],
    },
    "controller.dependency-inspection": {
        "class": withDependencyInjection(DependencyInspectionController),
        "constructor": [],
    },
    "controller.routing": {
        "class": withDependencyInjection(RoutingController),
        "constructor": [],
    },
    "controller.logs": {
        "class": withDependencyInjection(LogsController),
        "constructor": [],
    },
    "controller.not_found": {
        "class": withDependencyInjection(PageNotFoundController),
        "constructor": [

        ],
    },
}
