import React, {Component} from 'react';

export default class JSONFormatter extends Component {
    render() {
        const {data} = this.props;
        let value;

        try {
            value = JSON.stringify(data, null, 2)
        } catch(e) {
            if (data.constructor) {
                value = data.constructor.name;
            } else {
                value = data.toString();
            }
        }

        return (
            <div>
                <pre>{value}</pre>
            </div>
        )
    }
}