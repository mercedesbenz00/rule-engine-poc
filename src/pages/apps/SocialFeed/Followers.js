import React from 'react';
import { Card, CardBody, UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu } from 'reactstrap';

import avatar3 from '../../../assets/images/users/avatar-3.jpg';
import avatar4 from '../../../assets/images/users/avatar-4.jpg';
import avatar5 from '../../../assets/images/users/avatar-2.jpg';
import avatar9 from '../../../assets/images/users/avatar-9.jpg';
import avatar10 from '../../../assets/images/users/avatar-5.jpg';

const Followers = () => {
    const peopleToFollow = [
        {
            id: 1,
            name: 'Robb Stark',
            status: 'The first king in the North',
            avatar: avatar5,
        },
        {
            id: 2,
            name: 'Sansa Stark',
            status: 'Lady of winterfall',
            avatar: avatar9,
        },
        {
            id: 3,
            name: 'Cersei Lannister',
            status: 'Queen of the Seven Kingdoms',
            avatar: avatar10,
        },
        {
            id: 4,
            name: 'Daenerys Targaryen',
            status: 'The dragon queen',
            avatar: avatar3,
        },
        {
            id: 5,
            name: 'Adhamd Annaway',
            status: 'I am available!',
            avatar: avatar4,
        },
    ];

    return (
        <React.Fragment>
            <Card>
                <CardBody>
                    <UncontrolledDropdown className="float-right">
                        <DropdownToggle tag="button" className="btn btn-sm btn-link no-arrow card-drop p-0">
                            <i className="mdi mdi-dots-horizontal"></i>
                        </DropdownToggle>

                        <DropdownMenu right>
                            <DropdownItem>Today</DropdownItem>
                            <DropdownItem>Yesterday</DropdownItem>
                            <DropdownItem>Last Week</DropdownItem>
                            <DropdownItem>Last Month</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>

                    <h4 className="header-title mb-3">People you may know</h4>

                    <div className="inbox-widget">
                        {peopleToFollow.map((people, index) => {
                            return (
                                <div key={index} className="inbox-item">
                                    <div className="inbox-item-img">
                                        <img src={people.avatar} className="rounded-circle" alt="" />
                                    </div>
                                    <p className="inbox-item-author">{people.name}</p>
                                    <p className="inbox-item-text">{people.status}</p>
                                    <p className="inbox-item-date">
                                        <button type="button" className="btn btn-sm btn-outline-primary px-1 py-0">
                                            {' '}
                                            <i className="uil uil-user-plus font-16"></i>{' '}
                                        </button>
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </CardBody>
            </Card>
        </React.Fragment>
    );
};

export default Followers;
