import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import PageTitle from '../../../components/PageTitle';
import ChatUsers from './ChatUsers';
import ChatArea from './ChatArea';
import ChatProfile from './ChatProfile';

import { users } from './data';

// ChatApp
class ChatApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedUser: users[1],
        };

        this.onUserChange = this.onUserChange.bind(this);
    }

    /**
     * On user change
     */
    onUserChange = user => {
        this.setState({ selectedUser: user });
    };

    render() {
        return (
            <React.Fragment>
                <PageTitle
                    breadCrumbItems={[
                        { label: 'Apps', path: '/apps/chat' },
                        { label: 'Chat', path: '/apps/chat', active: true },
                    ]}
                    title={'Chat'}
                />

                <Row>
                    <Col xl={3} lg={6} className="order-lg-1 order-xl-1">
                        <ChatUsers onUserSelect={this.onUserChange} />
                    </Col>

                    <Col xl={6} lg={12} className="order-lg-2 order-xl-1">
                        <ChatArea selectedUser={this.state.selectedUser} />
                    </Col>

                    <Col xl={3} lg={6} className="order-lg-1 order-xl-2">
                        <ChatProfile selectedUser={this.state.selectedUser} />
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default ChatApp;
