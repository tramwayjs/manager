import React, {Component} from 'react';

export default class JSONFormatter extends Component {
    static format(data) {
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
        
        return value;
    }

    render() {
        const {data, className} = this.props;
        let value = JSONFormatter.format(data);

        return (
            <div className={className}>
                <pre>{value}</pre>
            </div>
        )
    }
}