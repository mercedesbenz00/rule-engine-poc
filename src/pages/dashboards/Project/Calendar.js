// @flow
import React, { useState } from 'react';
import {
    Card,
    CardBody,
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Row,
    Col,
} from 'reactstrap';
import Flatpickr from 'react-flatpickr';

const Calendar = () => {
    const [date, setDate] = useState(new Date());

    return (
        <Card>
            <CardBody>
                <UncontrolledButtonDropdown className="float-right">
                    <DropdownToggle tag="button" className="btn btn-link arrow-none card-drop p-0">
                        <i className="mdi mdi-dots-vertical"></i>
                    </DropdownToggle>

                    <DropdownMenu right>
                        <DropdownItem>Export</DropdownItem>
                        <DropdownItem>Print</DropdownItem>
                    </DropdownMenu>
                </UncontrolledButtonDropdown>

                <h4 className="header-title mb-3">Your Calendar</h4>

                <Row className="calendar-widget">
                    <Col lg={5} md={6} className='d-none d-sm-block'>
                        <Flatpickr
                            options={{ inline: true, shorthandCurrentMonth: true }}
                            value={date}
                            onChange={date => setDate(date)}
                        />
                    </Col>
                    <Col lg={7} md={6}>
                        <ul className="list-unstyled pl-md-2 pl-lg-0">
                            <li className="mb-4">
                                <p className="text-muted mb-1 font-13">
                                    <i className="mdi mdi-calendar"></i> 7:30 AM - 10:00 AM
                                </p>
                                <h5>Meeting with BD Team</h5>
                            </li>
                            <li className="mb-4">
                                <p className="text-muted mb-1 font-13">
                                    <i className="mdi mdi-calendar"></i> 10:30 AM - 11:45 AM
                                </p>
                                <h5>Design Review - Hyper Admin</h5>
                            </li>
                            <li className="mb-4">
                                <p className="text-muted mb-1 font-13">
                                    <i className="mdi mdi-calendar"></i> 12:15 PM - 02:00 PM
                                </p>
                                <h5>Setup Github Repository</h5>
                            </li>
                            <li>
                                <p className="text-muted mb-1 font-13">
                                    <i className="mdi mdi-calendar"></i> 5:30 PM - 07:00 PM
                                </p>
                                <h5>Meeting with Design Studio</h5>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
};

export default Calendar;
