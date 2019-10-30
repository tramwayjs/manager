import { Component, React } from "tramway-core-react";
import { Page } from "../../layout";
import { Routes } from "../../lists";

export default class Routing extends Component {
    render() {
        return (
            <Page>
                {this.props.file}
                <Routes routes={this.props.routes}/>
            </Page>
        )
    }
}