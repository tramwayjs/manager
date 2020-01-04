import React, {Component} from 'react';
import { Page } from "../../layout";
import { Routes } from "../../lists";
import { Segment } from 'semantic-ui-react';

export default class Routing extends Component {
    state = {
        loading: true,
    }

    render() {
        const {file, routes} = this.props;
        const {loading} = this.state;

        return (
            <Page>
                {file}
                <Segment basic vertical loading={loading}>
                    <Routes routes={routes}/>
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