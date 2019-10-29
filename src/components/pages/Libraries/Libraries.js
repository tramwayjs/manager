import { Component, React } from "tramway-core-react";
import { Page } from "../../layout";
import { InstalledLibraries } from "../../lists";
import { Header, Grid } from "semantic-ui-react";

export default class Libraries extends Component {
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

    render() {
        const {dependencies, devDependencies, updates} = this.props;
        
        return (
            <Page>
                <Grid columns={2} divided>
                    <Grid.Row>
                        <Grid.Column>
                            <Header as='h2'>Tramway Dependencies</Header>
                            <InstalledLibraries libraries={this.filter(dependencies, 'tramway')} updates={this.filter(updates, 'tramway')}/>
                        </Grid.Column>
                        <Grid.Column>
                            <Header as='h2'>External Dependencies</Header>
                            <InstalledLibraries libraries={this.filter(dependencies, 'tramway', false)} updates={this.filter(updates, 'tramway', false)}/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Header as='h2'>Babel Dependencies</Header>
                            <InstalledLibraries libraries={this.filter(devDependencies, 'babel')} updates={this.filter(updates, 'babel')}/>
                        </Grid.Column>
                        <Grid.Column>
                            <Header as='h2'>Development Dependencies</Header>
                            <InstalledLibraries libraries={this.filter(devDependencies, 'babel', false)} updates={this.filter(updates, 'babel', false)}/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Page>
        )
    }
}