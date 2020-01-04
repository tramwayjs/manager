import React, {Component} from 'react';
import { Page } from "../../layout";
import { DependenciesList, ParametersList } from "../../lists";
import { Header, Segment } from "semantic-ui-react";

export default class Dependencies extends Component {
    state = {
        loading: true,
    }
    
    render() {
        const {services, parameters, instances, handleStateChange} = this.props;
        const {loading} = this.state;

        return (
            <Page handleStateChange={handleStateChange}>
                <Header as='h2'>Parameters</Header>
                <Segment basic vertical loading={loading}>
                    <ParametersList parameters={parameters}/>
                </Segment>

                <Header as='h2'>Services</Header>
                <Segment basic vertical loading={loading}>
                    <DependenciesList dependencies={services} instances={instances}/>
                </Segment>
            </Page>
        )
    }

    componentDidUpdate(prevProps, prevState) {
        const {services, parameters, instances} = this.props;

        if (prevProps.services === services && prevProps.parameters === parameters && prevProps.instances === instances) {
            return;
        }

        this.setState({loading: false})
    }
}