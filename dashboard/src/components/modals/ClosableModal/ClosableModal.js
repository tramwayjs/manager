import React, { PureComponent } from 'react';
import {Modal, Button} from 'semantic-ui-react';

export default class ClosableModal extends PureComponent {
    state = {
        open: false
    };

    static Actions = Modal.Actions;
    static Content = Modal.Content;
    static Description = Modal.Description;
    static Header = Modal.Header;

    toggleOpen = () => {
        this.setState({open: true})
    }

    toggleClose = () => {
        this.setState({open: false})
    }

    render() {
        const {open: _o, ...props} = this.props;
        const {open} = this.state;
        return (
            <Modal open={open} onClose={this.toggleClose} {...props}/>
        );
    }
}