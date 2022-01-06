import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Media } from 'reactstrap';
import classnames from 'classnames';
import SimpleBar from 'simplebar-react';

import { users } from './data';

// ChatUsers
class ChatUsers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [...users],
            selectedUser: users[1],
            selectedGroup: 'All',
        };

        this.filterUsers = this.filterUsers.bind(this);
        this.search = this.search.bind(this);
        this.activateUser = this.activateUser.bind(this);
    }

    /**
     * Filter users
     */
    filterUsers = group => {
        this.selectedGroup = group;
        this.setState({
            selectedGroup: group,
            users:
                group !== 'All'
                    ? [...users].filter(u => u.groups.toLowerCase().indexOf(group.toLowerCase()) >= 0)
                    : [...users],
        });
    };

    /**
     * Search the user
     * @param {*} text
     */
    search(text) {
        this.setState({
            users: text ? [...users].filter(u => u.name.toLowerCase().indexOf(text.toLowerCase()) >= 0) : [...users],
        });
    }

    /**
     * Activates the user
     * @param {*} user
     */
    activateUser(user) {
        this.setState({ selectedUser: user });
        if (this.props.onUserSelect) {
            this.props.onUserSelect(user);
        }
    }

    render() {
        const groupFilters = ['All', 'Favourties', 'Work', 'Friends'];

        return (
            <React.Fragment>
                <Card>
                    <CardBody className="p-0">
                        <ul className="nav nav-tabs nav-bordered">
                            {groupFilters.map((group, index) => {
                                return (
                                    <li key={index} className="nav-item" onClick={e => this.filterUsers(group)}>
                                        <Link
                                            to="#"
                                            className={classnames('nav-link', {
                                                active: this.state.selectedGroup === group,
                                            })}>
                                            {group}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>

                        <div className="tab-content">
                            <div className="tab-pane show active p-3">
                                <div className="app-search">
                                    <div className="form-group position-relative">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="People, groups & messages..."
                                            onKeyUp={e => this.search(e.target.value)}
                                        />
                                        <span className="mdi mdi-magnify search-icon"></span>
                                    </div>
                                </div>

                                <SimpleBar style={{ maxHeight: '556px', width: '100%' }}>
                                    {this.state.users.map((user, index) => {
                                        return (
                                            <Link
                                                to="#"
                                                key={index}
                                                className="text-body"
                                                onClick={e => {
                                                    this.activateUser(user);
                                                }}>
                                                <Media
                                                    className={classnames('mt-1', 'p-2', {
                                                        'bg-light': user.id === this.state.selectedUser.id,
                                                    })}>
                                                    <img
                                                        src={user.avatar}
                                                        className="mr-2 rounded-circle"
                                                        height="48"
                                                        alt=""
                                                    />

                                                    <Media body>
                                                        <h5 className="mt-0 mb-0 font-14">
                                                            <span className="float-right text-muted font-12">
                                                                {user.lastMessageOn}
                                                            </span>
                                                            {user.name}
                                                        </h5>
                                                        <p className="mt-1 mb-0 text-muted font-14">
                                                            <span className="w-25 float-right text-right">
                                                                {user.totalUnread && (
                                                                    <span className="badge badge-danger-lighten">
                                                                        {user.totalUnread}
                                                                    </span>
                                                                )}
                                                            </span>
                                                            <span className="w-75">{user.lastMessage}</span>
                                                        </p>
                                                    </Media>
                                                </Media>
                                            </Link>
                                        );
                                    })}
                                </SimpleBar>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </React.Fragment>
        );
    }
}

export default ChatUsers;
