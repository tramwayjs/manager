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
        "controller": "controller.dependency-inspection",
        "path": "dependency-injection/:key",
        "methods": ["get"],
    },
    {
        "controller": 'controller.not_found',
        "methods": ["get"],
        "path": "*",
    },
];

export default routesValues;