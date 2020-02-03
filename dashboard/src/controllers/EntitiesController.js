import React from 'react';
import {controllers} from 'tramway-router-react-strategy';
import { Entities } from '../components/pages';
const {ReactController} = controllers;

export default class ServicesController extends ReactController {
    state = {};
    
    render() {
        const {entities} = this.state;

        return (
            <Entities 
                entities={entities} 
                onSelect={className => this.handleSelect(className)}
                onDelete={async className => await this.handleDelete(className)}
                onCreate={async entity => await this.handleCreate(entity)}
            />
        )
    }

    handleSelect(className) {
        this.history.push(`/entities/${className}`);
    }

    async handleCreate(entity) {

    }

    async handleDelete(className) {

    }

    async componentDidMount() {
        await this.getEntities();
    }

    async getEntities() {
        let resourcePath = '/api/entities';
        
        const results = await fetch(resourcePath);
        const {entities} = await results.json();
        
        this.setState({entities});
    }
}