import React from 'react';
import { Form, Message } from 'semantic-ui-react';
import StateAwareForm from '../StateAwareForm';

export default class EntityForm extends StateAwareForm {
    static defaultProps = {
        onSubmit: () => {},
        onCancel: () => {},
    };

    render() {
        const {error, loading, className} = this.state;

        return (
            <Form onSubmit={() => this.handleSubmit()} error={!!error}>
                <Form.Input
                    required
                    name='className'
                    label='Class Name'
                    placeholder="MyEntity"
                    value={className}
                    onChange={(e, value) => this.handleChange(value)}
                />
                
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