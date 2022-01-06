import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu, Media } from 'reactstrap';

import avatar from '../../../assets/images/users/avatar-1.jpg';

const UserProfile = () => {
    return (
        <React.Fragment>
            <Card>
                <CardBody>
                    <UncontrolledDropdown className="float-right">
                        <DropdownToggle tag="button" className="btn btn-sm btn-link no-arrow card-drop p-0">
                            <i className="mdi mdi-dots-horizontal"></i>
                        </DropdownToggle>

                        <DropdownMenu right>
                            <DropdownItem>Edit Profile</DropdownItem>
                            <DropdownItem>Settings</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>

                    <Media>
                        <img className="d-flex align-self-start rounded mr-2" src={avatar} alt="" height="48" />

                        <Media body>
                            <h5 className="mt-1 mb-0">Dominic Keller</h5>
                            <p className="mb-1 mt-1 text-muted">California, USA</p>
                        </Media>
                    </Media>

                    <div className="list-group list-group-flush mt-2">
                        <Link to="#" className="list-group-item list-group-item-action text-primary border-0">
                            <i className="uil uil-images mr-1"></i> News Feed
                        </Link>
                        <Link to="#" className="list-group-item list-group-item-action border-0">
                            <i className="uil uil-comment-alt-message mr-1"></i> Messages
                        </Link>
                        <Link to="#" className="list-group-item list-group-item-action border-0">
                            <i className="uil uil-calendar-alt mr-1"></i> Events
                        </Link>
                        <Link to="#" className="list-group-item list-group-item-action border-0">
                            <i className="uil uil-users-alt mr-1"></i> Groups
                        </Link>
                        <Link to="#" className="list-group-item list-group-item-action border-0">
                            <i className="uil uil-copy mr-1"></i> Pages
                        </Link>
                    </div>
                </CardBody>
            </Card>
        </React.Fragment>
    );
};

export default UserProfile;
