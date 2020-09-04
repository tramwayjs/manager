import router from './router';
import logger from './logger';
import core from './core';
import controllers from './controllers';
import services from './services';
import repositories from './repositories';
import providers from './providers';

export default {
    ...router,
    ...logger,
    ...core,
    ...controllers,
    ...services,
    ...repositories,
    ...providers,
}