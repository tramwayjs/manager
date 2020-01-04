import React, {Component} from 'react';
import { Table, Icon, Label } from "semantic-ui-react";
import { JSONFormatter } from "../../items";

export default class DependenciesList extends Component {
    prepareRows() {
        const {dependencies = {}, instances = []} = this.props;
        const items = Object.entries(dependencies);

        if (!items.length) {
            return (
                <Table.Row>
                    <Table.Cell>No dependencies found</Table.Cell>
                </Table.Row>
            );
        }

        return items.map(([key, classDefinition]) => (
            <Table.Row key={key}>
                <Table.Cell>
                    {instances.includes(key) && <Icon color="green" name="check circle" aria-label="The instance has been created and the service is being used" link/>}
                </Table.Cell>
                <Table.Cell><a href={`/dependency-injection/${key}`}>{key}</a></Table.Cell>
                <Table.Cell>{classDefinition.class}</Table.Cell>
                <Table.Cell><ol>{this.prepareConstructorArgs(classDefinition)}</ol></Table.Cell>
                <Table.Cell>{this.prepareFunctionsArgs(classDefinition)}</Table.Cell>
            </Table.Row>
        ))
    }

    prepareConstructorArgs(classDefinition) {
        const constructorArgs = classDefinition.constructor;

        return constructorArgs.map(item => {
            const {type, key} = item;

            if (type && key) {
                return <li><a href={`/dependency-injection/${key}`}>{key} <Label size="tiny">{type}</Label></a></li>
            }

            if (item instanceof Function) {
                return <li>{item.name}()</li>
            }

            try {
                return <li><JSONFormatter data={item}/></li>
            } catch(e) {
                if (item instanceof Object) {
                    return <li>{item.constructor.name}</li>
                }
            }

            return <li>{item.toString()}</li>
        })
    }
    
    prepareFunctionsArgs(classDefinition) {
        return classDefinition.functions ? classDefinition.functions.length : 0
    }

    render() {
        return (
            <Table celled striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell></Table.HeaderCell>
                        <Table.HeaderCell>Key</Table.HeaderCell>
                        <Table.HeaderCell>Class</Table.HeaderCell>
                        <Table.HeaderCell>Constructor</Table.HeaderCell>
                        <Table.HeaderCell>Function Calls</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {this.prepareRows()}
                </Table.Body>
            </Table>
        )
    }
}