import { Component, React } from "tramway-core-react";
import { Table } from "semantic-ui-react";

export default class InstalledLibraries extends Component {
    prepareRows() {
        const {libraries, updates} = this.props;

        return Object.entries(libraries).map(([library, version]) => (
            <Table.Row key={library}>
                <Table.Cell>{library}</Table.Cell>
                <Table.Cell>{version}</Table.Cell>
                <Table.Cell>{updates[library]}</Table.Cell>
                <Table.Cell><button>Update</button></Table.Cell>
            </Table.Row>
        ))
    }

    render() {
        return (
            <Table celled striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Module</Table.HeaderCell>
                        <Table.HeaderCell>Version</Table.HeaderCell>
                        <Table.HeaderCell>Latest Version</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {this.prepareRows()}
                </Table.Body>
            </Table>
        )
    }
}