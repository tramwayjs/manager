import React from 'react';
import {controllers} from 'tramway-router-react-strategy';
import {Dashboard} from '../components/pages';
const {ReactController} = controllers;

export default class DashboardController extends ReactController {  
    state = {};

    async getApplicationState() {
        try {
            const results = await fetch('/api/state');
            const {parameters, instances} = await results.json();
            
            this.setState({parameters, instances});
        } catch(e) {
            this.setState({parameters: undefined, instances: undefined})
        }
    }

    async getSystemStats() {
        try {
            const results = await fetch('/api/system');
            const system = await results.json();
            
            this.setState({system});
        } catch(e) {
            this.setState({system: undefined});
            clearInterval(this.poller);
        }
    }

    async componentDidMount() {
        await this.getApplicationState();
        await this.getSystemStats();

        this.poller = setInterval(async () => {
            await this.getSystemStats();
        }, 6000)
    }

    render() {
        const {parameters, instances, system} = this.state;
        return <Dashboard parameters={parameters} instances={instances} system={system}/>
    }
}
