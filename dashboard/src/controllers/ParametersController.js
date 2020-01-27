import React from 'react';
import {controllers} from 'tramway-router-react-strategy';
import {Parameters} from '../components/pages';
const {ReactController} = controllers;

export default class ParametersController extends ReactController {
    state = {};

    async handleStateChange(state) {
        if (state === this.state.state) {
            return;
        }

        setTimeout(async () => await this.getDependencyInjection(), 3000)
    }
    
    render() {
        const {parameters} = this.state;

        return (
            <Parameters
                parameters={parameters}
                handleStateChange={async state => await this.handleStateChange(state)}
            />
        )
    }

    async componentDidMount() {
        await this.getDependencyInjection();
    }

    async getDependencyInjection() {
        const results = await fetch('/api/dependency-injection');
        const {parameters} = await results.json();
        
        this.setState({parameters});
    }
}