import React, {Component} from 'react';
import { Table, Segment } from "semantic-ui-react";
import { JSONFormatter } from "../../items";

export default class ParametersList extends Component {
    prepareRows() {
        const {parameters = {}} = this.props;
        const items = parameters ? Object.entries(parameters) : [];

        if (!items.length) {
            return (
                <Table.Row>
                    <Table.Cell>No parameters found</Table.Cell>
                </Table.Row>
            );
        }

        return items.map(([key, value]) => {
            if (value instanceof Function) {
                value = `${value.name}()`;
            } 
            
            if (value instanceof Object) {
                value = <Segment placeholder size="small" padded={false}><JSONFormatter data={value}/></Segment>
            }

            return (
                <Table.Row key={key}>
                    <Table.Cell>{key}</Table.Cell>
                    <Table.Cell>{value}</Table.Cell>
                </Table.Row>
            )
        })
    }

    render() {
        return (
            <Table celled striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Key</Table.HeaderCell>
                        <Table.HeaderCell>Value</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {this.prepareRows()}
                </Table.Body>
            </Table>
        )
    }
}