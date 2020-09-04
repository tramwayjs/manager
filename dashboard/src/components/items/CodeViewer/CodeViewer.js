import React, { Component } from 'react';
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Container } from 'semantic-ui-react';

export default class CodeViewer extends Component {
    static defaultProps = {
        language: 'javascript',
    }

    render() {
        const {language, children, className} = this.props;
        return (
            <Container className={className}>
                <SyntaxHighlighter language={language} style={vs2015}>
                    {children}
                </SyntaxHighlighter>
            </Container>
        )
    }
}