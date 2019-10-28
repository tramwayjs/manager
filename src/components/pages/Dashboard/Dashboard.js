import {Component, React} from 'tramway-core-react';
import { Page } from '../../layout';

export default class Dashboard extends Component {
    render() {
        const {message} = this.props;
        
        return (
            <Page>
                <p>This is the React component: {message}</p>
            </Page>
        )
    }
}