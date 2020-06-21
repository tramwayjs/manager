import React, { Component } from 'react';
import { Page } from "../../layout";
import { Grid, Header, Button, Table, Image } from "semantic-ui-react";
import { CodeViewer, JSONFormatter } from '../../items';
import { CreateItem } from '../../buttons';
import { EntityFieldForm } from '../../forms';
import path from 'path';

export default class Entity extends Component {
    static defaultProps = {
        onSaveField: () => {},
        onDeleteField: () => {},
    };

    static defaultProps = {
        code: '',
    };

    async handleDeleteField(field) {
        return await this.props.onDeleteField(field);
    }

    async handleSaveField(fieldItem) {
        return await this.props.onSaveField(fieldItem)
    }

    prepareFields(fields = []) {
        return fields.map(({field, get, set}) => (
            <Table.Row>
                <Table.Cell>{field}</Table.Cell>
                <Table.Cell>{get}</Table.Cell>
                <Table.Cell>{set}</Table.Cell>
                <Table.Cell><Button size="tiny" color="red" icon="trash" onClick={() => this.handleDeleteField(field)}/></Table.Cell>
            </Table.Row>
        ));
    }

    prepareFieldEditor() {
        return (
            <CreateItem 
                title="Create or Update Field"
                trigger={<Button size="tiny" color="green" icon="plus"/>}
                handleSave={async fieldItem => await this.handleSaveField(fieldItem)}
            >
                <EntityFieldForm/>
            </CreateItem>
        );
    }

    prepareVscodePath(location) {
        if (!location) {
            return "";
        }

        return 'vscode://' + path.join('file', location);
    }

    render() {
        const {className, baseClassName, fields, code, location} = this.props;

        return (
            <Page>
                <Header as="h2">
                    <Header.Content>{className}</Header.Content>
                    <Header.Subheader>{baseClassName}</Header.Subheader>
                    <Header.Subheader>
                        Location: <a href={this.prepareVscodePath(location)}><Image src="/icons/vscode16.png" size='mini' spaced style={{width: "1.14285714rem"}}/>{' '}{location}</a>
                    </Header.Subheader>
                </Header>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={12}>
                            <CodeViewer>
                                {code}
                            </CodeViewer>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Header as="h3">Fields</Header>
                            <Table>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>Field</Table.HeaderCell>
                                        <Table.HeaderCell>Getter</Table.HeaderCell>
                                        <Table.HeaderCell>Setter</Table.HeaderCell>
                                        <Table.HeaderCell>{this.prepareFieldEditor()}</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    {this.prepareFields(fields)}
                                </Table.Body>
                            </Table>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Page>
        )
    }
}