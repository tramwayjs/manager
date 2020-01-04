import React, { PureComponent } from 'react';
import { Page } from "../../layout";

export default class NotFound extends PureComponent {
    render() {
        return (
            <Page>
                The route you're looking for could not be found.
            </Page>
        );
    }
}
