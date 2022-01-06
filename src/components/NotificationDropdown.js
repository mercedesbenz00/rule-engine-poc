// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';

import SimpleBar from 'simplebar-react';

const notificationContainerStyle = {
    maxHeight: '230px',
    display: 'none',
};

const notificationShowContainerStyle = {
    maxHeight: '230px',
};

type NotificationItem = {
    id: number,
    text: string,
    subText: string,
    icon: string,
    bgColor: string,
};

type NotificationDropdownProps = {
    notifications: Array<NotificationItem>,
};

type NotificationDropdownState = {
    dropdownOpen?: boolean,
    notificationContainerStyle?: {},
};

class NotificationDropdown extends Component<NotificationDropdownProps, NotificationDropdownState> {
    static defaultProps = {
        notifications: [],
    };

    constructor(props: NotificationDropdownProps) {
        super(props);
        this.toggleDropdown = this.toggleDropdown.bind(this);

        this.state = {
            dropdownOpen: false,
            notificationContainerStyle: notificationContainerStyle,
        };
    }

    /*:: toggleDropdown: () => void */
    toggleDropdown() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen,
            notificationContainerStyle:
                this.state.notificationContainerStyle === notificationContainerStyle
                    ? notificationShowContainerStyle
                    : notificationContainerStyle,
        });
    }

    getRedirectUrl = (item: NotificationItem) => {
        return `/notification/${item.id}`;
    };

    render() {
        return (
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
                <DropdownToggle
                    data-toggle="dropdown"
                    tag="button"
                    className="nav-link dropdown-toggle arrow-none btn btn-link"
                    onClick={this.toggleDropdown}
                    aria-expanded={this.state.dropdownOpen}>
                    <i className="mdi mdi-bell-outline noti-icon"></i>
                    <span className="noti-icon-badge"></span>
                </DropdownToggle>
                <DropdownMenu right className="dropdown-menu-animated dropdown-lg">
                    <div onClick={this.toggleDropdown}>
                        <div className="dropdown-item noti-title">
                            <h5 className="m-0">
                                <span className="float-right">
                                    <Link to="/notifications" className="text-dark">
                                        <small>全部清除</small>
                                    </Link>
                                </span>
                                通知
                            </h5>
                        </div>
                        <SimpleBar style={this.state.notificationContainerStyle}>
                            {this.props.notifications.map((item, i) => {
                                return (
                                    <Link
                                        to={this.getRedirectUrl(item)}
                                        className="dropdown-item notify-item"
                                        key={i + '-noti'}>
                                        <div className={`notify-icon bg-${item.bgColor}`}>
                                            <i className={item.icon}></i>
                                        </div>
                                        <p className="notify-details">
                                            {item.text}
                                            <small className="text-muted">{item.subText}</small>
                                        </p>
                                    </Link>
                                );
                            })}
                        </SimpleBar>

                        <Link to="/" className="dropdown-item text-center text-primary notify-item notify-all">
                            全部查看
                        </Link>
                    </div>
                </DropdownMenu>
            </Dropdown>
        );
    }
}

export default NotificationDropdown;
