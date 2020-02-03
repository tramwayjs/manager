import React, {PureComponent} from 'react';

export default class StateAwareForm extends PureComponent {
    state = {};

    static defaultProps = {
        onSubmit: values => values,
    };

    handleChange({name, value}) {
        if (this.props.onChange) {
            this.props.onChange({name, value})
        }

        this.setState({[name]: value});
    }

    async handleSubmit() {
        const {loading, error, ...data} = this.state;

        try {
            this.setState({error: undefined, loading: true})
            await this.props.onSubmit(data);
        } catch(e) {
            this.setState({error: e, loading: false})
        }
    }
}