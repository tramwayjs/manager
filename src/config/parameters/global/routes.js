const routeValues = [
    {
        "controller": "controller.libraries",
        "action": "index",
        "path": "api/libraries",
        "methods": ["get"]
    },
    {
        "controller": "controller.routing",
        "action": "index",
        "path": "api/routing",
        "methods": ["get"]
    },
    {
        "controller": "controller.dependency-injection",
        "action": "get",
        "path": "api/dependency-injection",
        "methods": ["get"]
    },
    {
        "controller": "controller.dependency-injection",
        "action": "getOne",
        "path": "api/dependency-injection",
        "methods": ["get"],
        "arguments": ['key']
    },
    {
        "controller": "controller.app",
        "action": "get",
        "path": "api/state",
        "methods": ["get"],
    },
    {
        "controller": "controller.app",
        "action": "update",
        "path": "api/state",
        "methods": ["patch"],
    },
    {
        "controller": "controller.system",
        "action": "get",
        "path": "api/system",
        "methods": ["get"],
    },
    {
        "controller": "controller.main",
        "action": "index",
        "path": "*",
        "methods": ["get"]
    },
];

export default routeValues;