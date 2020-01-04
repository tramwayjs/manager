import React, {Component} from 'react';
import { Page } from "../../layout";
import { InstalledLibraries } from "../../lists";
import { Header, Grid, Segment } from "semantic-ui-react";

export default class Libraries extends Component {
    static defaultProps = {
        dependencies: [],
        devDependencies: [],
        updates: [],
    };

    state = {
        loading: true,
    }

    filter(dependencies, target, included = true) {
        return Object.fromEntries(
            Object
                .entries(dependencies)
                .filter(
                    ([library]) => {
                        const hasTarget = library.includes(target);

                        return (!included || hasTarget) && !(!included && hasTarget);
                    }
                )
        );
    }

    componentDidUpdate(prevProps, prevState) {
        const {dependencies, devDependencies, updates} = this.props;

        if (prevProps.dependencies === dependencies && prevProps.devDependencies === devDependencies && prevProps.updates === updates) {
            return;
        }

        this.setState({loading: false})
    }

    render() {
        const {dependencies, devDependencies, updates} = this.props;
        const {loading} = this.state;
        
        return (
            <Page>
                <Grid columns={2} divided>
                    <Grid.Row>
                        <Grid.Column>
                            <Header as='h2'>Tramway Dependencies</Header>
                                <Segment basic vertical loading={loading}>
                                    <InstalledLibraries libraries={this.filter(dependencies, 'tramway')} updates={this.filter(updates, 'tramway')}/>
                                </Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Header as='h2'>External Dependencies</Header>
                            <Segment basic vertical loading={loading}>
                                <InstalledLibraries libraries={this.filter(dependencies, 'tramway', false)} updates={this.filter(updates, 'tramway', false)}/>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Header as='h2'>Babel Dependencies</Header>
                            <Segment basic vertical loading={loading}>
                                <InstalledLibraries libraries={this.filter(devDependencies, 'babel')} updates={this.filter(updates, 'babel')}/>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Header as='h2'>Development Dependencies</Header>
                            <Segment basic vertical loading={loading}>
                                <InstalledLibraries libraries={this.filter(devDependencies, 'babel', false)} updates={this.filter(updates, 'babel', false)}/>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Page>
        )
    }
}