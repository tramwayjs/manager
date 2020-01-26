import React from 'react';
import {controllers} from 'tramway-router-react-strategy';
import {Services} from '../components/pages';
import querystring from 'querystring';
const {ReactController} = controllers;

export default class ServicesController extends ReactController {
    state = {};

    constructor({args: [filter], ...props}) {
        super(props);
        this.filter = filter;
    }

    async handleStateChange(state) {
        if (state === this.state.state) {
            return;
        }

        setTimeout(async () => await this.getDependencyInjection(), 3000)
    }
    
    render() {
        const {services, instances} = this.state;

        return (
            <Services
                services={services}
                instances={instances}
                handleStateChange={async state => await this.handleStateChange(state)}
            />
        )
    }

    async componentDidMount() {
        await this.getDependencyInjection();
    }

    async getDependencyInjection() {
        let resourcePath = '/api/dependency-injection';

        if (this.filter) {
            resourcePath = `${resourcePath}?${querystring.encode({filter: this.filter})}`;
        }
        
        const results = await fetch(resourcePath);
        const {services, instances} = await results.json();
        
        this.setState({services, instances});
    }
}