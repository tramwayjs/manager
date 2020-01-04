import { Page } from '../../layout';
import React, {Component} from 'react';
import { Button } from 'semantic-ui-react';

export default class Dashboard extends Component {
    render() {
        const {message} = this.props;
        
        return (
            <Page>
                <p>This is the React component: {message}</p>

                <Button onClick={() => console.log('weeeee')}>Weee</Button>
            </Page>
        )
    }
}