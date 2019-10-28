import { React, Component } from "tramway-core-react";
import Menu from "../Menu";
import { Container } from "semantic-ui-react";

export default class Page extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <Container style={{marginTop: 50}}>
                    {this.props.children}
                </Container>
            </div>
        );
    }
}