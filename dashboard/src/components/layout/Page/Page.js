import React, {Component} from 'react';
import Menu from "../Menu";
import { Container } from "semantic-ui-react";

export default class Page extends Component {
    render() {
        const {handleStateChange} = this.props;
        
        return (
            <div>
                <Menu handleStateChange={handleStateChange}/>
                <Container style={{marginTop: 50}}>
                    {this.props.children}
                </Container>
            </div>
        );
    }
}