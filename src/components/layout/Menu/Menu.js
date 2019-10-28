import { React, Component } from "tramway-core-react";
import { Menu as SemanticMenu } from "semantic-ui-react";

export default class Menu extends Component {
    render() {
        return (
            <SemanticMenu inverted fixed="top">
                <SemanticMenu.Header>
                    <SemanticMenu.Item icon="home" link href="/"/>
                </SemanticMenu.Header>
                <SemanticMenu.Item name="Libraries" link href="libraries"/>
                <SemanticMenu.Item name="Routing" link href="routing"/>
                <SemanticMenu.Item name="Dependency Injection" link href="dependency-injection"/>
                <SemanticMenu.Item name="Architecture" link href="architecture"/>
            </SemanticMenu>
        )
    }
}