import React from 'react';
import {controllers} from 'tramway-router-react-strategy';
import { Entity } from '../components/pages';
const {ReactController} = controllers;

export default class EntityController extends ReactController {
    state = {};
    
    render() {
        const {item} = this.state;
        const {className, baseClassName, fields, code, location} = item || {};

        return (
            <Entity
                className={className}
                location={location}
                baseClassName={baseClassName}
                code={code}
                fields={fields}
                onEdit={async entity => await this.handleEdit(className, entity)}
                onSaveField={async fieldItem => await this.handleSaveField(fieldItem)}
                onDeleteField={async fieldName => await this.handleDeleteField(fieldName)}
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

    async handleEdit(className, entity) {
        const results = await fetch(`/api/entities/${className}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(entity),
        });

        if (!results.ok) {
            throw new Error(results.status)
        }

        this.history.push(`/entities/${entity.className}`);
        const item = await this.getEntity(entity.className);
        
        this.setState({item});
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

    async handleDeleteField(fieldName) {
        const {className} = this.params;

        const results = await fetch(`/api/entities/${className}/fields/${fieldName}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        if (!results.ok) {
            throw new Error(results.status)
        }

        const item = await this.getEntity(className);
        
        this.setState({item});
    }
}
