import React from 'react';
import {controllers} from 'tramway-router-react-strategy';
import {Dependency} from '../components/pages';
const {ReactController} = controllers;

export default class DependencyInspectionController extends ReactController {
    state = {};
    
    render() {
        const {className, services, functions, parameters, serviceConfig} = this.state;

        return (
            <Dependency 
                className={className}
                services={services}
                functions={functions}
                parameters={parameters}
                serviceConfig={serviceConfig}
            />
        )
    }

    async componentDidMount() {
        const {key} = this.params;

        const results = await fetch(`/api/dependency-injection/${key}`);
        const {className, services, functions, parameters, serviceConfig} = await results.json();
        
        this.setState({className, services, functions, parameters, serviceConfig});
    }
}
