import React from 'react';
import { Form, Message, Header, Segment } from 'semantic-ui-react';
import StateAwareForm from '../StateAwareForm';

export default class EntityFieldForm extends StateAwareForm {
    static defaultProps = {
        onSubmit: () => {},
        onCancel: () => {},
    };

    render() {
        const {error, loading, field, get, set} = this.state;

        return (
            <Form onSubmit={() => this.handleSubmit()} error={!!error}>
                <Form.Input
                    required
                    name='field'
                    label='Field'
                    placeholder="id"
                    value={field}
                    onChange={(e, value) => this.handleChange(value)}
                />

                <Segment placeholder>
                    <Header as="h4">The getter and setter will automatically be generated from the name but in some exceptions, you may want to use a custom getter/setter instead:</Header>
                    <Form.Group widths="equal" as={Segment.Inline}>
                        <Form.Input
                            name='get'
                            label='Getter'
                            placeholder="getId"
                            value={get}
                            onChange={(e, value) => this.handleChange(value)}
                        />
                        <Form.Input
                            name='set'
                            label='Setter'
                            placeholder="setId"
                            value={set}
                            onChange={(e, value) => this.handleChange(value)}
                        />
                    </Form.Group>
                </Segment>
                
                {loading && (<p>Working on it</p>)}
                {error && (
                    <Message
                        error
                        header='Something went wrong'
                        content={error && error.message}
                    />
                )}
            </Form>
        );
    }
}