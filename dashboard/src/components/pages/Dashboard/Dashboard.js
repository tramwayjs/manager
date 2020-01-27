import { Page } from '../../layout';
import React, {Component} from 'react';
import { Header, Table, List } from 'semantic-ui-react';

export default class Dashboard extends Component {
    prepareInstances(instances) {
        return instances.map(instance => <li>{instance}</li>);
    }

    render() {
        const {parameters = {}, instances = [], system = {}} = this.props;
        let {port, PORT} = parameters;

        if (!port) {
            port = PORT;
        }

        const {platform, release, memory, memoryAvailable, uptime} = system.system || {};
        const {cpu, memory: appMemory, elapsed} = system.appUsage || {};
        
        return (
            <Page>
                <Header as="h2">
                    <Header.Content>
                        Welcome to Tramway Manager
                        <Header.Subheader>Manage Tramway's various components and dependencies here</Header.Subheader>
                    </Header.Content>
                </Header>

                <Header as="h3">
                    System Stats
                </Header>

                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Platform</Table.HeaderCell>
                            <Table.HeaderCell>Release</Table.HeaderCell>
                            <Table.HeaderCell>Memory</Table.HeaderCell>
                            <Table.HeaderCell>Memory Available</Table.HeaderCell>
                            <Table.HeaderCell>Memory Used</Table.HeaderCell>
                            <Table.HeaderCell>CPU Used</Table.HeaderCell>
                            <Table.HeaderCell>App Uptime</Table.HeaderCell>
                            <Table.HeaderCell>System Uptime</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>{platform}</Table.Cell>
                            <Table.Cell>{release}</Table.Cell>
                            <Table.Cell>{!isNaN(memory) ? `${Number.parseFloat(memory/1024/1024/1024).toFixed(2)} GB` : ''}</Table.Cell>
                            <Table.Cell>{!isNaN(memoryAvailable) ? `${Number.parseFloat(memoryAvailable/1024/1024/1024).toFixed(2)} GB` : ''}</Table.Cell>
                            <Table.Cell>{!isNaN(appMemory) ? `${Number.parseFloat(appMemory/1024/1024/1024).toFixed(2)} GB` : ''}</Table.Cell>
                            <Table.Cell>{!isNaN(cpu) ? `${cpu} %` : ''}</Table.Cell>
                            <Table.Cell>{!isNaN(elapsed) ? `${Number.parseInt(elapsed/60/1000)} min` : ''}</Table.Cell>
                            <Table.Cell>{!isNaN(uptime) ? `${Number.parseInt(uptime/60)} min` : ''}</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>

                <Header as="h3">
                    Project Details
                </Header>

                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Attribute</Table.HeaderCell>
                            <Table.HeaderCell>Value</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>Port</Table.Cell>
                            <Table.Cell><a href={`http://localhost:${port}/`} target="_blank">{port}</a></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Instances</Table.Cell>
                            <Table.Cell>
                                <List bulleted items={instances}/>
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>

            </Page>
        )
    }
}