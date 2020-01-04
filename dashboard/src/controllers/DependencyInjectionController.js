import React from 'react';
import {controllers} from 'tramway-router-react-strategy';
import {Dependencies} from '../components/pages';
const {ReactController} = controllers;

export default class DependencyInjectionController extends ReactController {
    state = {};

    async handleStateChange(state) {
        if (state === this.state.state) {
            return;
        }

        setTimeout(async () => await this.getDependencyInjection(), 3000)
    }
    
    render() {
        const {services, parameters, instances} = this.state;

        return (
            <Dependencies
                services={services}
                parameters={parameters}
                instances={instances}
                handleStateChange={async state => await this.handleStateChange(state)}
            />
        )
    }

    async componentDidMount() {
        await this.getDependencyInjection();
    }

    async getDependencyInjection() {
        const results = await fetch('/api/dependency-injection');
        const {services, parameters, instances} = await results.json();
        
        this.setState({services, parameters, instances});
    }
}