import { Component, React } from "tramway-core-react";
import { Table } from "semantic-ui-react";

export default class DependenciesList extends Component {
    prepareRows() {
        const {dependencies = {}} = this.props;

        return Object.entries(dependencies).map(([key, {class: className, constructor, functions}]) => (
            <Table.Row key={key}>
                <Table.Cell><a href={`/dependency-injection/${key}`}>{key}</a></Table.Cell>
                <Table.Cell>{className}</Table.Cell>
                <Table.Cell>{JSON.stringify(constructor)}</Table.Cell>
                <Table.Cell>{JSON.stringify(functions)}</Table.Cell>
            </Table.Row>
        ))
    }

    render() {
        return (
            <Table celled striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Key</Table.HeaderCell>
                        <Table.HeaderCell>Class</Table.HeaderCell>
                        <Table.HeaderCell>Constructor</Table.HeaderCell>
                        <Table.HeaderCell>Functions</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {this.prepareRows()}
                </Table.Body>
            </Table>
        )
    }
}