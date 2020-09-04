const routesValues = [
    {
        "methods": ["get"],
        "controller": 'controller.dashboard',
        "title": "Home",
    },
    {
        "methods": ["get"],
        "controller": "controller.libraries",
        "action": "index",
        "path": "libraries",
    },
    {
        "controller": "controller.routing",
        "methods": ["get"],
        "path": "routing",
    },
    {
        "controller": "controller.dependency-injection",
        "methods": ["get"],
        "path": "dependency-injection",
    },
    {
        "controller": "controller.parameters",
        "methods": ["get"],
        "path": "parameters",
    },
    {
        "controller": "controller.policies",
        "methods": ["get"],
        "path": "policies",
    },
    {
        "controller": "controller.services",
        "methods": ["get"],
        "path": "services",
    },
    {
        "controller": "controller.controllers",
        "methods": ["get"],
        "path": "controllers",
    },
    {
        "controller": "controller.repositories",
        "methods": ["get"],
        "path": "repositories",
    },
    {
        "controller": "controller.factories",
        "methods": ["get"],
        "path": "factories",
    },
    {
        "controller": "controller.entities",
        "methods": ["get"],
        "path": "entities",
    },
    {
        "controller": "controller.entity",
        "methods": ["get"],
        "path": "entities/:className",
    },
    {
        "controller": "controller.dependency-inspection",
        "path": "services/:key",
        "methods": ["get"],
    },
    {
        "controller": "controller.providers",
        "methods": ["get"],
        "path": "providers",
    },
    {
        "controller": "controller.dependency-inspection",
        "path": "providers/:key",
        "methods": ["get"],
    },
    {
        "controller": "controller.dependency-inspection",
        "path": "dependency-injection/:key",
        "methods": ["get"],
    },
    {
        "controller": "controller.logs",
        "path": "logs",
        "methods": ["get"],
    },
    {
        "controller": 'controller.not_found',
        "methods": ["get"],
        "path": "*",
    },
];

export default routesValues;