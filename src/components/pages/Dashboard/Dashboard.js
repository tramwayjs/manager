import {Component, React} from 'tramway-core-react';

export default class Dashboard extends Component {
    render() {
        const {message} = this.props;
        
        return (
            <div>
                <p>This is the React component: {message}</p>
            </div>
        )
    }
}