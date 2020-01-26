import React from 'react';
import {controllers} from 'tramway-router-react-strategy';
import {Routing} from '../components/pages';
const {ReactController} = controllers;

export default class RoutingController extends ReactController {
    state = {};
    
    render() {
        const {routes, baseUrl} = this.state;

        return <Routing routes={routes} baseUrl={baseUrl}/>
    }

    async componentDidMount() {
        try {
            await this.getRouting();
            await this.getBaseUrl();
        } catch(e) {
            
        }
    }

    async getRouting() {
        const results = await fetch('/api/routing');
        const {routes} = await results.json();
        
        this.setState({routes});
    }

    async getBaseUrl() {
        const results = await fetch('/api/state');
        const {parameters} = await results.json();
        let {port, PORT} = parameters;

        if (!port) {
            port = PORT;
        }
        
        this.setState({baseUrl: `http://localhost:${port}`});
    }
}
