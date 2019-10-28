import { Component, React } from "tramway-core-react";
import { Page } from "../../layout";

export default class Libraries extends Component {
    render() {
        const {message} = this.props;
        
        return (
            <Page>
                <pre>{message}</pre>
            </Page>
        )
    }
}