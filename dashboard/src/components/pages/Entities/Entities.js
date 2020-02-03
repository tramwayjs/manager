import React, { Component } from 'react';
import { Page } from "../../layout";
import { Table, Button, Header } from "semantic-ui-react";

export default class Entities extends Component {
    static defaultProps = {
        onSelect: className => className,
        onDelete: className => className,
        onCreate: entity => entity,
    };

    handleDeleteEntity(evt, className) {
        evt.stopPropagation();
        return this.props.onDelete(className);
    }

    handleCreateEntity() {
        console.log('open an editor or something')
    }

    handleSaveEntity(entity) {
        return this.props.onCreate(entity);
    }

    handleSelectEntity(className) {
        return this.props.onSelect(className);
    }

    prepareEntities(entities = []) {
        return entities.map(({className, baseClassName}) => (
            <Table.Row onClick={() => this.handleSelectEntity(className)}>
                <Table.Cell>{className}</Table.Cell>
                <Table.Cell>{baseClassName}</Table.Cell>
                <Table.Cell><Button size="tiny" color="red" icon="trash" onClick={evt => this.handleDeleteEntity(evt, className)} disabled/></Table.Cell>
            </Table.Row>
        ))
    }

    render() {
        const {entities = {}} = this.props;

        return (
            <Page>
                <Header as="h2">Entities</Header>
                <Table selectable striped>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Class</Table.HeaderCell>
                            <Table.HeaderCell>Base Class</Table.HeaderCell>
                            <Table.HeaderCell><Button size="tiny" color="green" icon="plus" onClick={() => this.handleCreateEntity()} disabled/></Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.prepareEntities(Object.values(entities))}
                    </Table.Body>
                </Table>
            </Page>
        )
    }
}