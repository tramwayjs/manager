import whiskers from 'whiskers';
import { EntityTemplate, FactoryTemplate } from '../templates';

export default class TemplateService {
    constructor(fileProvider) {
        this.fileProvider = fileProvider;
    }

    async render(item) {
        const { file, ...context} = item;
        let template = await this.fileProvider.readFile(file);

        return whiskers.render(template, context);
    }

    resolveTemplate(type) {
        switch(type) {
            case 'entity': return new EntityTemplate();
            case 'factory': return new FactoryTemplate();
        }
    }
}