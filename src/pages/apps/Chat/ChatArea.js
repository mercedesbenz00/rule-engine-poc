import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, UncontrolledDropdown, Row, Col, DropdownToggle, DropdownItem, DropdownMenu } from 'reactstrap';
import { AvForm, AvInput } from 'availity-reactstrap-validation';
import classnames from 'classnames';
import SimpleBar from 'simplebar-react';

import Loader from '../../../components/Loader';
import { messages } from './data';

const UserMessage = ({ message, toUser }) => {
    return (
        <li className={classnames('clearfix', { odd: message.from.id === toUser.id })}>
            <div className="chat-avatar">
                <img src={message.from.avatar} className="rounded" alt="" />
                <i>{message.sendOn}</i>
            </div>
            <div className="conversation-text">
                <div className="ctext-wrap">
                    <i>{message.from.name}</i>
                    {message.message.type === 'text' && <p>{message.message.value}</p>}
                </div>

                {message.message.type === 'file' && (
                    <Card className="mt-2 mb-1 shadow-none border text-left">
                        <div className="p-2">
                            <Row className="align-items-center">
                                <Col className="col-auto">
                                    <div className="avatar-sm">
                                        <span className="avatar-title rounded">
                                            <i className="uil uil-file-upload-alt font-20"></i>
                                        </span>
                                    </div>
                                </Col>
                                <Col className="pl-0">
                                    <Link to="#" className="text-muted font-weight-bold">
                                        {message.message.value.file}
                                    </Link>
                                    <p className="mb-0">{message.message.value.size}</p>
                                </Col>
                                <Col className="col-auto">
                                    <Link to="#" className="btn btn-link btn-lg text-muted">
                                        <i className="dripicons-download"></i>
                                    </Link>
                                </Col>
                            </Row>
                        </div>
                    </Card>
                )}
            </div>

            <UncontrolledDropdown className="conversation-actions">
                <DropdownToggle tag="button" className="btn btn-sm btn-link no-arrow p-0">
                    <i className="uil uil-ellipsis-v"></i>
                </DropdownToggle>

                <DropdownMenu>
                    <DropdownItem>Copy Message</DropdownItem>
                    <DropdownItem>Edit</DropdownItem>
                    <DropdownItem>Delete</DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        </li>
    );
};

// ChatArea
class ChatArea extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            userMessages: [],
            toUser: {
                id: 9,
                name: 'Shreyu N',
                avatar: 'assets/images/users/avatar-7.jpg',
                email: 'support@coderthemes.com',
                phone: '+1 456 9595 9594',
                location: 'California, USA',
                languages: 'English, German, Spanish',
                groups: 'Work, Friends',
            },
            newMessage: '',
        };

        this.getMessagesForUser = this.getMessagesForUser.bind(this);
        this.sendChatMessage = this.sendChatMessage.bind(this);
    }

    componentDidMount() {
        this.getMessagesForUser();
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props && this.props.selectedUser) {
            this.getMessagesForUser();
        }
    }

    /**
     * Fetches the messages for given user
     */
    getMessagesForUser = () => {
        if (this.props.selectedUser) {
            this.setState({ loading: true });
            setTimeout(() => {
                this.setState({
                    userMessages: [
                        ...messages.filter(
                            m =>
                                (m.to.id === this.state.toUser.id && m.from.id === this.props.selectedUser.id) ||
                                (this.state.toUser.id === m.from.id && m.to.id === this.props.selectedUser.id)
                        ),
                    ],
                    loading: false,
                });
            }, 750);
        }
    };

    /**
     * sends the chat message
     */
    sendChatMessage(e, values) {
        let userMessages = [...this.state.userMessages];

        userMessages.push({
            id: this.state.userMessages.length + 1,
            from: this.state.toUser,
            to: this.state.selectedUser,
            message: { type: 'text', value: values.newMessage },
            sendOn: new Date().getHours() + ':' + new Date().getMinutes(),
        });
        this.setState({ userMessages });
    }

    render() {
        return (
            <React.Fragment>
                <Card>
                    <CardBody className="position-relative">
                        {this.state.loading && <Loader />}

                        <SimpleBar style={{ maxHeight: '556px', width: '100%' }}>
                            <ul className="conversation-list">
                                {this.state.userMessages.map((message, index) => {
                                    return <UserMessage key={index} message={message} toUser={this.state.toUser} />;
                                })}
                            </ul>
                        </SimpleBar>

                        <Row>
                            <Col>
                                <div className="mt-2 bg-light p-3 rounded">
                                    <AvForm
                                        className="needs-validation"
                                        noValidate
                                        name="chat-form"
                                        id="chat-form"
                                        onValidSubmit={this.sendChatMessage}>
                                        <Row>
                                            <Col className="mb-2 mb-sm-0">
                                                <AvInput
                                                    type="text"
                                                    name="newMessage"
                                                    className="border-0"
                                                    required></AvInput>
                                            </Col>
                                            <Col className="col-sm-auto">
                                                <div className="btn-group">
                                                    <Link to="#" className="btn btn-light">
                                                        <i className="uil uil-paperclip"></i>
                                                    </Link>
                                                    <Link to="#" className="btn btn-light">
                                                        {' '}
                                                        <i className="uil uil-smile"></i>{' '}
                                                    </Link>
                                                    <button
                                                        type="submit"
                                                        className="btn btn-success chat-send btn-block">
                                                        <i className="uil uil-message"></i>
                                                    </button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </AvForm>
                                </div>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </React.Fragment>
        );
    }
}

export default ChatArea;
