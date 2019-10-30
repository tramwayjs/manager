import { Component, React } from "tramway-core-react";
import { Page } from "../../layout";
import { DependenciesList } from "../../lists";
import { Header } from "semantic-ui-react";

export default class Dependencies extends Component {
    render() {
        return (
            <Page>
                <Header as='h2'>Services</Header>
                <DependenciesList dependencies={this.props.services}/>
            </Page>
        )
    }
}