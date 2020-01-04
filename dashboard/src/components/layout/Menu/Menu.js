import React, {Component} from 'react';
import { Menu as SemanticMenu } from "semantic-ui-react";
import { AppToggle } from '../../buttons';

export default class Menu extends Component {
    render() {
        const {handleStateChange} = this.props;

        return (
            <SemanticMenu inverted fixed="top">
                <SemanticMenu.Header>
                    <SemanticMenu.Item icon="home" link href="/"/>
                </SemanticMenu.Header>
                <SemanticMenu.Item name="Libraries" link href="/libraries"/>
                <SemanticMenu.Item name="Routing" link href="/routing"/>
                <SemanticMenu.Item name="Dependency Injection" link href="/dependency-injection"/>
                <SemanticMenu.Item name="Architecture" link href="/architecture"/>
                <SemanticMenu.Menu position="right">
                    <SemanticMenu.Item as={AppToggle} handleChange={handleStateChange}/>
                </SemanticMenu.Menu>
            </SemanticMenu>
        )
    }
}