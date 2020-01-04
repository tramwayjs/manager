import React, {Component} from 'react';
import { Table } from "semantic-ui-react";

export default class FunctionsList extends Component {
    prepareRows() {
        const {functions = []} = this.props;

        if (!functions.length) {
            return (
                <Table.Row>
                    <Table.Cell>No functions found</Table.Cell>
                </Table.Row>
            );
        }

        return functions.map(({function: functionName, args = []}, i) => (
            <Table.Row key={`${functionName}${i}`}>
                <Table.Cell>{functionName}</Table.Cell>
                <Table.Cell>
                    <ol>
                        {args.map(arg => {
                            if (arg instanceof Function) {
                                return <li>{arg.name}</li>;
                            }

                            if (arg instanceof Object) {
                                return <li>{arg.constructor.name}</li>
                            }

                            return <li>{arg.toString()}</li>;
                        })}
                    </ol>
                </Table.Cell>
            </Table.Row>
        ))
    }

    render() {
        return (
            <Table celled striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Function</Table.HeaderCell>
                        <Table.HeaderCell>Arguments</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {this.prepareRows()}
                </Table.Body>
            </Table>
        )
    }
}