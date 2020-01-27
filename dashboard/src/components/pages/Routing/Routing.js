import React, {Component} from 'react';
import { Page } from "../../layout";
import { Routes } from "../../lists";
import { Segment, Header } from 'semantic-ui-react';

export default class Routing extends Component {
    state = {
        loading: true,
    }

    render() {
        const {file, routes, baseUrl} = this.props;
        const {loading} = this.state;

        return (
            <Page>
                <Header as='h2'>Routes</Header>
                {file}
                <Segment basic vertical loading={loading}>
                    <Routes routes={routes} baseUrl={baseUrl}/>
                </Segment>
            </Page>
        )
    }

    componentDidUpdate(prevProps, prevState) {
        const {file, routes} = this.props;

        if (prevProps.file === file && prevProps.routes === routes) {
            return;
        }

        this.setState({loading: false})
    }
}