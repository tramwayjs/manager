import React, {Component} from 'react';
import { Table } from "semantic-ui-react";

export default class Routes extends Component {
    prepareRows() {
        const {routes = [], baseUrl = ''} = this.props;

        return Object.values(routes).map(({controller, action, path = '', methods, policy = 'None'}, i) => (
            <Table.Row key={i}>
                <Table.Cell><a href={`${baseUrl}/${path}`} target="_blank">{`/${path}`}</a></Table.Cell>
                <Table.Cell className="uppercase">{methods}</Table.Cell>
                <Table.Cell><a href={`/dependency-injection/${controller}`}>{controller}</a></Table.Cell>
                <Table.Cell>{action}</Table.Cell>
                <Table.Cell>{policy}</Table.Cell>
            </Table.Row>
        ))
    }

    render() {
        return (
            <Table celled striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Path</Table.HeaderCell>
                        <Table.HeaderCell>HTTP Method</Table.HeaderCell>
                        <Table.HeaderCell>Controller</Table.HeaderCell>
                        <Table.HeaderCell>Action</Table.HeaderCell>
                        <Table.HeaderCell>Policy</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {this.prepareRows()}
                </Table.Body>
            </Table>
        )
    }
}