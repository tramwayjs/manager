import React from 'react';
import {controllers} from 'tramway-router-react-strategy';
import { Entity } from '../components/pages';
const {ReactController} = controllers;

export default class EntityController extends ReactController {
    state = {};
    
    render() {
        const {item} = this.state;
        const {className, baseClassName, fields, code} = item || {};

        return (
            <Entity
                className={className}
                baseClassName={baseClassName}
                code={code}
                fields={fields}
                onSaveField={async fieldItem => await this.handleSaveField(fieldItem)}
            />
        )
    }

    async componentDidMount() {
        const {className} = this.params;
        const item = await this.getEntity(className);
        
        this.setState({item});
    }

    async getEntity(className) {
        const results = await fetch(`/api/entities/${className}`);
        return await results.json();
    }

    async handleSaveField(fieldItem) {
        const {className} = this.params;

        const results = await fetch(`/api/entities/${className}/fields`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(fieldItem),
        });

        if (!results.ok) {
            throw new Error(results.status)
        }

        const item = await this.getEntity(className);
        
        this.setState({item});
    }
}
