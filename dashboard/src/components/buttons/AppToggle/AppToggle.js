import React, {Component} from 'react';
import { Button } from 'semantic-ui-react';

export default class AppToggle extends Component {
    state = {
        status: 'stopped',
        error: false,
        loading: false,
    }

    static defaultProps = {
        handleChange: status => status,
    }

    static getIcon(status) {
        switch(status) {
            case 'active': return 'stop';
            case 'stopped': return 'play';
        }
    }

    async handleToggle(status) {
        let state;

        switch(status) {
            case 'active': state = 'stopped'; break;
            case 'stopped': state = 'active'; break;
            default: throw new Error('Invalid status');
        }

        this.setState({loading: true})

        let response = await fetch('http://localhost:8000/api/state', {
            method: 'PATCH',
            body: JSON.stringify({state}),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (!response.ok) {
            this.setState({error: true, loading: false})
        }

        this.setState({status: state, error: false, loading: false}, () => {
            const {status} = this.state;
            const {handleChange} = this.props;
            return handleChange(status);
        });
    }

    async getApplicationState() {
        const results = await fetch('/api/state');
        const {instances = []} = await results.json();
        
        this.setState({status: instances.length ? 'active' : 'stopped'});
    }

    async componentDidMount() {
        try {
            await this.getApplicationState();
        } catch(e) {
            
        }
    }

    render() {
        const {status, error, loading} = this.state;

        return (
            <Button 
                icon={AppToggle.getIcon(status)} 
                onClick={async () => await this.handleToggle(status)} 
                error={Boolean(error)} 
                loading={loading}
                color={'stopped' === status ? 'green': 'red'}
            />
        )
    }
}