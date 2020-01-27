import React from 'react';
import {controllers} from 'tramway-router-react-strategy';
import {Logs} from '../components/pages';
const {ReactController} = controllers;

export default class LogsController extends ReactController {
    state = {};
    
    render() {
        const {logs} = this.state;

        return <Logs logs={logs}/>
    }

    async componentDidMount() {
        await this.getLogs();

        setInterval(async () => await this.getLogs(), 1000);
    }

    async getLogs() {
        const results = await fetch('/api/logs');
        const logs = await results.json();
        
        this.setState({logs});
    }
}
