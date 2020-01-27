import React, {Component} from 'react';
import Menu from "../Menu";
import Sidebar from '../Sidebar';
import { Container, Segment } from "semantic-ui-react";
import './styles.css';

export default class Page extends Component {
    render() {
        const {handleStateChange, children} = this.props;
        
        return (
            <div>
                <Sidebar className="page sidebar">
                    <Menu handleStateChange={handleStateChange}/>
                    <Segment basic className="page frame">
                        <Container className="page content">
                            {children}
                        </Container>
                    </Segment>
                </Sidebar>
            </div>
        );
    }
}