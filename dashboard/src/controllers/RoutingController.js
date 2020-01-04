import React from 'react';
import {controllers} from 'tramway-router-react-strategy';
import {Routing} from '../components/pages';
const {ReactController} = controllers;

export default class RoutingController extends ReactController {
    state = {};
    
    render() {
        const {routes} = this.state;

        return <Routing routes={routes}/>
    }

    async componentDidMount() {
        const results = await fetch('/api/routing');
        const {routes} = await results.json();
        
        this.setState({routes});
    }
}
