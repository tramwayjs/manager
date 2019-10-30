import { Component, React } from "tramway-core-react";
import { Page } from "../../layout";
import { DependenciesList } from "../../lists";

export default class Dependencies extends Component {
    render() {
        return (
            <Page>
                <DependenciesList dependencies={this.props.services}/>
            </Page>
        )
    }
}