import React, { Component } from 'react';
import { Card, CardBody, UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu, Button } from 'reactstrap';

// ChatProfile
class ChatProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const user = this.props.selectedUser || {};
        const groups = user.groups ? user.groups.split() : [];

        return (
            <React.Fragment>
                {user && (
                    <Card>
                        <CardBody className="">
                            <UncontrolledDropdown className="float-right">
                                <DropdownToggle tag="button" className="btn btn-sm btn-link no-arrow p-0">
                                    <i className="mdi mdi-dots-horizontal"></i>
                                </DropdownToggle>

                                <DropdownMenu>
                                    <DropdownItem>View Full</DropdownItem>
                                    <DropdownItem>Edit Contact Info</DropdownItem>
                                    <DropdownItem>Remove</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>

                            <div className="mt-3 text-center">
                                <img src={user.avatar} alt="" className="img-thumbnail avatar-lg rounded-circle" />
                                <h4>{user.name}</h4>
                                <Button className="btn-sm mt-1" color="primary">
                                    <i className="uil uil-envelope-add mr-1"></i>Send Email
                                </Button>
                                <p className="text-muted mt-2 font-14">
                                    Last Interacted: <strong>{user.lastMessageOn}</strong>
                                </p>
                            </div>

                            <div className="mt-3">
                                <hr className="" />

                                <p className="mt-4 mb-1">
                                    <strong>
                                        <i className="uil uil-at"></i> Email:
                                    </strong>
                                </p>
                                <p>{user.email}</p>

                                <p className="mt-3 mb-1">
                                    <strong>
                                        <i className="uil uil-phone"></i> Phone Number:
                                    </strong>
                                </p>
                                <p>{user.phone}</p>

                                <p className="mt-3 mb-1">
                                    <strong>
                                        <i className="uil uil-location"></i> Location:
                                    </strong>
                                </p>
                                <p>{user.location}</p>

                                <p className="mt-3 mb-1">
                                    <strong>
                                        <i className="uil uil-globe"></i> Languages:
                                    </strong>
                                </p>
                                <p>{user.languages}</p>

                                <p className="mt-3 mb-2">
                                    <strong>
                                        <i className="uil uil-users-alt"></i> Groups:
                                    </strong>
                                </p>

                                <p>
                                    {groups.map((group, index) => {
                                        return (
                                            <span key={index} className="badge badge-success-lighten p-1 font-14 mr-1">
                                                {group}
                                            </span>
                                        );
                                    })}
                                </p>
                            </div>
                        </CardBody>
                    </Card>
                )}
            </React.Fragment>
        );
    }
}

export default ChatProfile;
