import {
    DashboardController,
    LibrariesController,
    DependencyInjectionController,
    DependencyInspectionController,
    RoutingController,
    PageNotFoundController,
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
    "controller.dependency-inspection": {
        "class": withDependencyInjection(DependencyInspectionController),
        "constructor": [],
    },
    "controller.routing": {
        "class": withDependencyInjection(RoutingController),
        "constructor": [],
    },
    "controller.not_found": {
        "class": withDependencyInjection(PageNotFoundController),
        "constructor": [

        ],
    },
}
