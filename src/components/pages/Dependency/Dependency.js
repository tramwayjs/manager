import { Component, React } from "tramway-core-react";
import { Page } from "../../layout";
import { DependenciesList } from "../../lists";
import { Header } from "semantic-ui-react";

export default class Dependency extends Component {
    render() {
        const {className, services, parameters, functions} = this.props;

        return (
            <Page>
                <Header as="h2">{className}</Header>
                <Header as="h3">Dependencies</Header>
                <DependenciesList dependencies={services}/>

                <Header as="h3">Parameters</Header>
                {JSON.stringify(parameters)}

                <Header as="h3">Function Calls</Header>
                {JSON.stringify(functions)}
            </Page>
        )
    }
}