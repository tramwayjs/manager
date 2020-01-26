import React, {Component} from 'react';
import { Page } from "../../layout";
import { ParametersList } from "../../lists";
import { Header, Segment } from "semantic-ui-react";

export default class Parameters extends Component {
    state = {
        loading: true,
    }
    
    render() {
        const {parameters, handleStateChange} = this.props;
        const {loading} = this.state;

        return (
            <Page handleStateChange={handleStateChange}>
                <Header as='h2'>Parameters</Header>
                <Segment basic vertical loading={loading}>
                    <ParametersList parameters={parameters}/>
                </Segment>
            </Page>
        )
    }

    componentDidUpdate(prevProps, prevState) {
        const {parameters} = this.props;

        if (prevProps.parameters === parameters) {
            return;
        }

        this.setState({loading: false})
    }
}