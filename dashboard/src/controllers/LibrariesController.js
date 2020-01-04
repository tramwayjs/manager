import React from 'react';
import {controllers} from 'tramway-router-react-strategy';
import {Libraries} from '../components/pages';
const {ReactController} = controllers;

export default class LibrariesController extends ReactController {
    state = {};
    
    render() {
        const {dependencies, devDependencies, updates} = this.state;

        return <Libraries dependencies={dependencies} devDependencies={devDependencies} updates={updates}/>
    }

    async componentDidMount() {
        const results = await fetch('/api/libraries');
        const {dependencies, devDependencies, updates} = await results.json();
        
        this.setState({dependencies, devDependencies, updates});
    }
}
