import React from 'react';
import {controllers} from 'tramway-router-react-strategy';
import {Dashboard} from '../components/pages';
const {ReactController} = controllers;

export default class DashboardController extends ReactController {  
    state = {};

    async getApplicationState() {
        const results = await fetch('/api/state');
        const {parameters, instances} = await results.json();
        
        this.setState({parameters, instances});
    }

    async componentDidMount() {
        await this.getApplicationState();
    }

    render() {
        const {parameters, instances} = this.state;
        return <Dashboard parameters={parameters} instances={instances}/>
    }
}
