import React, { Component } from 'react';
import { Page } from "../../layout";
import { Table, Button, Header } from "semantic-ui-react";
import { CreateItem } from '../../buttons';
import { EntityForm } from '../../forms';


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

    prepareEntityEditor() {
        return (
            <CreateItem 
                title="Create Entity"
                trigger={<Button size="tiny" color="green" icon="plus"/>}
                handleSave={async entity => await this.handleSaveEntity(entity)}
            >
                <EntityForm/>
            </CreateItem>
        );
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
                <Table.Cell><Button size="tiny" color="red" icon="trash" onClick={evt => this.handleDeleteEntity(evt, className)}/></Table.Cell>
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
                            <Table.HeaderCell>{this.prepareEntityEditor()}</Table.HeaderCell>
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