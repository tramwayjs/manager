const routeValues = [
    {
        "controller": "controller.main",
        "action": "index",
        "methods": ["get"]
    },
    {
        "controller": "controller.libraries",
        "action": "index",
        "path": "libraries",
        "methods": ["get"]
    },
    {
        "controller": "controller.routing",
        "action": "index",
        "path": "routing",
        "methods": ["get"]
    },
    {
        "controller": "controller.dependency-injection",
        "action": "index",
        "path": "dependency-injection",
        "methods": ["get"]
    },
    {
        "controller": "controller.dependency-injection",
        "action": "getOne",
        "path": "dependency-injection",
        "methods": ["get"],
        "arguments": ['key']
    },
];

export default routeValues;