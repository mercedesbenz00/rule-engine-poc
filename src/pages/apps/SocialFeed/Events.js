import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu } from 'reactstrap';

const Events = () => {
    return (
        <React.Fragment>
            <Card>
                <CardBody className="p-2">
                    <UncontrolledDropdown className="float-right">
                        <DropdownToggle tag="button" className="btn btn-sm btn-link no-arrow card-drop p-0">
                            <i className="mdi mdi-dots-horizontal"></i>
                        </DropdownToggle>

                        <DropdownMenu right>
                            <DropdownItem>Refresh</DropdownItem>
                            <DropdownItem>Settings</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>

                    <div className="list-group list-group-flush mt-2">
                        <Link to="#" className="list-group-item list-group-item-action border-0">
                            <i className="uil uil-calendar-alt mr-1"></i> 3 events this week
                        </Link>
                        <Link to="#" className="list-group-item list-group-item-action border-0">
                            <i className="uil uil-calender mr-1"></i> Eva's birthday today
                        </Link>
                        <Link to="#" className="list-group-item list-group-item-action border-0">
                            <i className="uil uil-bookmark mr-1"></i> Jenny's wedding tomorrow
                        </Link>
                    </div>
                </CardBody>
            </Card>
        </React.Fragment>
    );
};

export default Events;
