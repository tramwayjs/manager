import { Page } from '../../layout';
import React, {Component} from 'react';
import { Header, Table, List } from 'semantic-ui-react';

export default class Dashboard extends Component {
    prepareInstances(instances) {
        return instances.map(instance => <li>{instance}</li>);
    }

    render() {
        const {parameters = {}, instances = []} = this.props;
        let {port, PORT} = parameters;

        if (!port) {
            port = PORT;
        }
        
        return (
            <Page>
                <Header as="h2">
                    <Header.Content>
                        Welcome to Tramway Manager
                        <Header.Subheader>Manage Tramway's various components and dependencies here</Header.Subheader>
                    </Header.Content>
                </Header>

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