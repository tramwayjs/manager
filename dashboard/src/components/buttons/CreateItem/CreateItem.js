import React, { Component } from 'react';
import { ClosableModal as Modal } from '../../modals';
import { Button, Icon } from 'semantic-ui-react';

export default class CreateItem extends Component {
    async handleSave() {
        const {...item} = this.state;

        try {
            await this.props.handleSave(item)
        } catch(e) {
            return;
        }

        this.modal.toggleClose();
    }

    handleCancel() {
        return this.modal.toggleClose();
    }

    handleChange({name, value}) {
        this.setState({[name]: value});
    }

    render() {
        const {title, trigger, children} = this.props;

        return (
            <Modal 
                trigger={React.cloneElement(trigger, {onClick: () => this.modal.toggleOpen()})} 
                ref={element => this.modal = element}
            >
                <Modal.Header>
                    {title}
                </Modal.Header>
                <Modal.Content>
                    {React.cloneElement(children, {onSubmit: () => this.handleSave(), onChange: value => this.handleChange(value)})}
                </Modal.Content>
                <Modal.Actions>
                    <Button type="button" onClick={() => this.handleSave()} primary icon><Icon name="check"/>Save</Button>
                    <Button type="button" onClick={() => this.handleCancel()}>Cancel</Button>
                </Modal.Actions>
            </Modal>
        );
    }
}