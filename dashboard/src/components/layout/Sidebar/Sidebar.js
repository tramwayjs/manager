import React, { PureComponent } from 'react';
import { Sidebar as SemanticSidebar, Menu, Icon } from "semantic-ui-react";

export default class Sidebar extends PureComponent {
    render() {
        const {children, style} = this.props;

        return (
            <SemanticSidebar.Pushable style={style}>
                <SemanticSidebar
                    as={Menu}
                    animation='overlay'
                    icon='labeled'
                    inverted
                    vertical
                    visible
                    width='thin'                        
                >
                    <Menu.Header>
                        <Menu.Item icon="home" link href="/"/>
                    </Menu.Header>
                    <Menu.Item link href="/libraries">
                        <Icon name='npm' />
                        Libraries
                    </Menu.Item>
                    <Menu.Item link href="/parameters">
                        <Icon name='settings' />
                        Parameters
                    </Menu.Item>
                    <Menu.Item link href="/routing">
                        <Icon name='sitemap' />
                        Routes
                    </Menu.Item>
                    <Menu.Item link href="/policies">
                        <Icon name='shield alternate' />
                        Policies
                    </Menu.Item>
                    <Menu.Item link href="/controllers">
                        <Icon name='tasks' />
                        Controllers
                    </Menu.Item>
                    <Menu.Item link href="/services">
                        <Icon name='file code' />
                        Services
                    </Menu.Item>
                    <Menu.Item link href="/repositories">
                        <Icon name='database' />
                        Repositories
                    </Menu.Item>
                    <Menu.Item link href="/factories">
                        <Icon name='factory' />
                        Factories
                    </Menu.Item>
                    <Menu.Item link href="/providers">
                        <Icon name='database' />
                        Providers
                    </Menu.Item>
                    <Menu.Item link href="/logs">
                        <Icon name='bug' />
                        Logs
                    </Menu.Item>
                    <Menu.Item link href="/docs">
                        <Icon name='question circle outline' />
                        Documentation
                    </Menu.Item>
                </SemanticSidebar>
                <SemanticSidebar.Pusher>
                    {children}
                </SemanticSidebar.Pusher>
            </SemanticSidebar.Pushable>
        );
    }
}