// @flow
import React from 'react';
import { Card, CardBody } from 'reactstrap';

import profileImg from '../../assets/images/users/avatar-2.jpg';
import avatar1 from '../../assets/images/users/avatar-3.jpg';
import avatar2 from '../../assets/images/users/avatar-4.jpg';
import avatar3 from '../../assets/images/users/avatar-5.jpg';

import MessageList from '../../components/MessageList';
import MessageItem from '../../components/MessageItem';

const Messages = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title mb-3">Messages</h4>
                <MessageList>
                    <MessageItem>
                        <div className="inbox-item-img">
                            <img src={profileImg} className="rounded-circle" alt="" />
                        </div>
                        <p className="inbox-item-author">Tomaslau</p>
                        <p className="inbox-item-text">I've finished it! See you so...</p>
                        <p className="inbox-item-date">
                            <a href="/" className="btn btn-sm btn-link text-info font-13">
                                {' '}
                                Reply{' '}
                            </a>
                        </p>
                    </MessageItem>

                    <MessageItem>
                        <div className="inbox-item-img">
                            <img src={avatar1} className="rounded-circle" alt="" />
                        </div>
                        <p className="inbox-item-author">Stillnotdavid</p>
                        <p className="inbox-item-text">This theme is awesome!</p>
                        <p className="inbox-item-date">
                            <a href="/" className="btn btn-sm btn-link text-info font-13">
                                {' '}
                                Reply{' '}
                            </a>
                        </p>
                    </MessageItem>

                    <MessageItem>
                        <div className="inbox-item-img">
                            <img src={avatar2} className="rounded-circle" alt="" />
                        </div>
                        <p className="inbox-item-author">Kurafire</p>
                        <p className="inbox-item-text">Nice to meet you</p>
                        <p className="inbox-item-date">
                            <a href="/" className="btn btn-sm btn-link text-info font-13">
                                {' '}
                                Reply{' '}
                            </a>
                        </p>
                    </MessageItem>

                    <MessageItem>
                        <div className="inbox-item-img">
                            <img src={avatar3} className="rounded-circle" alt="" />
                        </div>
                        <p className="inbox-item-author">Shahedk</p>
                        <p className="inbox-item-text">Hey! there I'm available...</p>
                        <p className="inbox-item-date">
                            <a href="/" className="btn btn-sm btn-link text-info font-13">
                                {' '}
                                Reply{' '}
                            </a>
                        </p>
                    </MessageItem>

                    <MessageItem>
                        <div className="inbox-item-img">
                            <img src={avatar2} className="rounded-circle" alt="" />
                        </div>
                        <p className="inbox-item-author">Adhamdannaway</p>
                        <p className="inbox-item-text">This theme is awesome!</p>
                        <p className="inbox-item-date">
                            <a href="/" className="btn btn-sm btn-link text-info font-13">
                                {' '}
                                Reply{' '}
                            </a>
                        </p>
                    </MessageItem>
                </MessageList>
            </CardBody>
        </Card>
    );
};

export default Messages;
