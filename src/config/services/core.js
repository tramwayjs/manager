import { Server } from '@tramwayjs/core';

export default {
    "server": {
        "class": Server,
        "constructor": [
            {"type": "service", "key": "router"},
            {"type": "parameter", "key": "app"},
            {"type": "parameter", "key": "port"}
        ],
        "functions": [
            {
                "function": "use",
                "args": [
                    {"type": "parameter", "key": "_method"}
                ]
            },
            {
                "function": "use",
                "args": [
                    {"type": "parameter", "key": "xMethod"}
                ]
            },
            {
                "function": "use",
                "args": [
                    {"type": "parameter", "key": "cors"}
                ]
            },
            {
                "function": "use",
                "args": [
                    {"type": "parameter", "key": "json"}
                ]
            },
            {
                "function": "use",
                "args": [
                    {"type": "parameter", "key": "urlEncoding"}
                ]
            },
            {
                "function": "use",
                "args": [
                    {"type": "parameter", "key": "cookieParser"}
                ]
            },
            {
                "function": "use",
                "args": [
                    {"type": "parameter", "key": "staticRouteMiddleware"},
                ]
            },
            {
                "function": "addLogger",
                "args": [
                    {"type": "service", "key": "logger.middleware"}
                ]
            },
        ]
    },
};