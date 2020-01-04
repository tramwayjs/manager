import React from 'react';
import {controllers} from 'tramway-router-react-strategy';
import {Dashboard} from '../components/pages';
const {ReactController} = controllers;

export default class DashboardController extends ReactController {    
    render() {
        return <Dashboard message="React"/>
    }
}
