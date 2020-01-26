import React, {Component} from 'react';
import { Menu as SemanticMenu } from "semantic-ui-react";
import { AppToggle } from '../../buttons';

export default class Menu extends Component {
    render() {
        const {handleStateChange} = this.props;

        return (
            <SemanticMenu inverted fixed="top">
                <SemanticMenu.Menu position="right">
                    <SemanticMenu.Item>
                        <AppToggle handleChange={handleStateChange}/>
                    </SemanticMenu.Item>
                </SemanticMenu.Menu>
            </SemanticMenu>
        )
    }
}