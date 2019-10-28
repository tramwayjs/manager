import router from './router';
import logger from './logger';
import core from './core';
import controllers from './controllers';

export default {
    ...router,
    ...logger,
    ...core,
    ...controllers,
}