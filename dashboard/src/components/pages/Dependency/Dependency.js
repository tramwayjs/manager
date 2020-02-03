import React, {Component} from 'react';
import { Page } from "../../layout";
import { DependenciesList, ParametersList, FunctionsList } from "../../lists";
import { Header, Segment } from "semantic-ui-react";
import { JSONFormatter, CodeViewer } from "../../items";

export default class Dependency extends Component {
    state = {
        loading: true,
    }

    render() {
        const {className, services, parameters, functions, serviceConfig} = this.props;
        const {loading} = this.state;

        return (
            <Page>
                <Header as="h2">{className}</Header>
                <Header as="h3">Dependencies</Header>
                <Segment basic vertical loading={loading}>
                    <DependenciesList dependencies={services}/>
                </Segment>

                <Header as="h3">Parameters</Header>
                <Segment basic vertical loading={loading}>
                    <ParametersList parameters={parameters}/>
                </Segment>

                <Header as="h3">Function Calls</Header>
                <Segment basic vertical loading={loading}>
                    <FunctionsList functions={functions}/>
                </Segment>

                <Header as="h3">Declaration</Header>
                <CodeViewer language="json">
                    {JSONFormatter.format(serviceConfig) || ''}
                </CodeViewer>
            </Page>
        )
    }

    componentDidUpdate(prevProps, prevState) {
        const {className, services, parameters, functions, serviceConfig} = this.props;

        if (prevProps.className === className && prevProps.services === services && prevProps.parameters === parameters && prevProps.functions === functions && prevProps.serviceConfig === serviceConfig) {
            return;
        }

        this.setState({loading: false})
    }
}