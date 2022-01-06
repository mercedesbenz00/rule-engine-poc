// @flow
import React, { Component } from 'react';
import { Card, CardBody, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Row, Col } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import SimpleBar from 'simplebar-react';

import classNames from 'classnames';
import PropTypes from 'prop-types';

/* Chat Item Avatar */
const ChatItemAvatar = ({ userAvatar, postedOn }) => {
    return (
        <div className="chat-avatar">
            <img src={userAvatar} alt={userAvatar} />
            <i>{postedOn}</i>
        </div>
    );
};

/* Chat Item Text */
const ChatItemText = ({ userName, text }) => {
    return (
        <div className="conversation-text">
            <div className="ctext-wrap">
                <i>{userName}</i>
                <p>{text}</p>
            </div>
        </div>
    );
};

/* Chat Item */
const chatItemDefaultProps = {
    placement: '',
    children: PropTypes.object,
    className: '',
};

const ChatItem = ({ children, placement, className }) => {
    return <li className={classNames('clearfix', { odd: placement === 'left' }, className)}>{children}</li>;
};

ChatItem.defaultProps = chatItemDefaultProps;

/**
 * ChatForm
 */

type ChatFormProps = {
    onNewMessagesPosted: PropTypes.func,
};

/**
 * Renders the ChatList
 */
class ChatForm extends Component<ChatFormProps> {
    constructor(props: ChatFormProps) {
        super(props);
        this.handleValidMessageSubmit = this.handleValidMessageSubmit.bind(this);
    }

    /**
     * Handle valid form submission
     */
    handleValidMessageSubmit = (event: PropTypes.object, values: PropTypes.object) => {
        this.props.onNewMessagesPosted(values);
    };

    render() {
        return (
            <AvForm
                onValidSubmit={this.handleValidMessageSubmit}
                className="needs-validation mt-2"
                noValidate
                name="chat-form"
                id="chat-form">
                <Row form>
                    <Col>
                        <AvField
                            name="text"
                            type="text"
                            errorMessage="Please enter your message"
                            validate={{ required: { value: true } }}
                        />
                    </Col>
                    <Col className="col-auto">
                        <button type="submit" className="btn btn-danger chat-send btn-block">
                            Send
                        </button>
                    </Col>
                </Row>
            </AvForm>
        );
    }
}

/**
 * ChatList
 */

type ChatListProps = {
    className?: string,
    messages: PropTypes.object,
};

type ChatListState = {
    messages: PropTypes.object,
};

/**
 * Renders the ChatList
 */
class ChatList extends Component<ChatListProps, ChatListState> {
    constructor(props: ChatListProps) {
        super(props);
        this.state = {
            messages: this.props.messages,
        };
        this.handleNewMessagePosted = this.handleNewMessagePosted.bind(this);
    }

    /**
     * Handle new message posted
     */
    handleNewMessagePosted = (message: PropTypes.object) => {
        // save new message
        this.setState({
            messages: this.state.messages.concat({
                id: this.state.messages.length + 1,
                userName: 'Geneva',
                text: message.text,
                postedOn: '10:00',
            }),
        });
    };

    render() {
        return (
            <Card>
                <CardBody>
                    <UncontrolledDropdown className="float-right">
                        <DropdownToggle tag="button" className="btn btn-link arrow-none card-drop p-0">
                            <i className="mdi mdi-dots-vertical"></i>
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>Refresh</DropdownItem>
                            <DropdownItem>Settings</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>

                    <h4 className="header-title mb-3">Chat</h4>

                    <div className="chat-conversation">
                        <SimpleBar style={{ maxHeight: '330px', width: '100%' }}>
                            <ul className={classNames('conversation-list', this.props.className)}>
                                {this.state.messages.map((message, i) => {
                                    return (
                                        <ChatItem key={i} placement={i > 0 ? (i % 2 === 0 ? '' : 'left') : 'right'}>
                                            {message.userPic && (
                                                <ChatItemAvatar
                                                    userAvatar={message.userPic}
                                                    postedOn={message.postedOn}
                                                />
                                            )}
                                            <ChatItemText userName={message.userName} text={message.text} />
                                        </ChatItem>
                                    );
                                })}
                            </ul>
                        </SimpleBar>

                        {/* chat form */}
                        <ChatForm onNewMessagesPosted={this.handleNewMessagePosted} />
                    </div>
                </CardBody>
            </Card>
        );
    }
}

export default ChatList;
