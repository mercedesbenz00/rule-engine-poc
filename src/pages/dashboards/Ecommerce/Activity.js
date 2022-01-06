// @flow
import React from 'react';
import { Card, CardBody, UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import SimpleBar from 'simplebar-react';

import Timeline from '../../../components/Timeline';
import TimelineItem from '../../../components/TimelineItem';

const Activity = () => {
    return (
        <Card>
            <CardBody>
                <UncontrolledButtonDropdown className="float-right">
                    <DropdownToggle tag="button" className="btn btn-link arrow-none card-drop p-0">
                        <i className="mdi mdi-dots-vertical"></i>
                    </DropdownToggle>

                    <DropdownMenu right>
                        <DropdownItem>Sales Report</DropdownItem>
                        <DropdownItem>Export Report</DropdownItem>
                        <DropdownItem>Profit</DropdownItem>
                        <DropdownItem>Action</DropdownItem>
                    </DropdownMenu>
                </UncontrolledButtonDropdown>

                <h4 className="header-title mb-2">Recent Activity</h4>

                <SimpleBar style={{ maxHeight: '430px', width: '100%' }}>
                    <Timeline>
                        <TimelineItem>
                            <i className="mdi mdi-upload bg-info-lighten text-info timeline-icon"></i>
                            <div className="timeline-item-info">
                                <a href="/" className="text-info font-weight-bold mb-1 d-block">
                                    You sold an item
                                </a>
                                <small>Paul Burgess just purchased “Hyper - Admin Dashboard”!</small>
                                <p className="mb-0 pb-2">
                                    <small className="text-muted">5 minutes ago</small>
                                </p>
                            </div>
                        </TimelineItem>

                        <TimelineItem>
                            <i className="mdi mdi-airplane bg-primary-lighten text-primary timeline-icon"></i>
                            <div className="timeline-item-info">
                                <a href="/" className="text-primary font-weight-bold mb-1 d-block">
                                    Product on the Bootstrap Market
                                </a>
                                <small>
                                    Dave Gamache added
                                    <span className="font-weight-bold">Admin Dashboard</span>
                                </small>
                                <p className="mb-0 pb-2">
                                    <small className="text-muted">30 minutes ago</small>
                                </p>
                            </div>
                        </TimelineItem>

                        <TimelineItem>
                            <i className="mdi mdi-microphone bg-info-lighten text-info timeline-icon"></i>
                            <div className="timeline-item-info">
                                <a href="/" className="text-info font-weight-bold mb-1 d-block">
                                    Robert Delaney
                                </a>
                                <small>
                                    Send you message
                                    <span className="font-weight-bold">"Are you there?"</span>
                                </small>
                                <p className="mb-0 pb-2">
                                    <small className="text-muted">2 hours ago</small>
                                </p>
                            </div>
                        </TimelineItem>

                        <TimelineItem>
                            <i className="mdi mdi-upload bg-primary-lighten text-primary timeline-icon"></i>
                            <div className="timeline-item-info">
                                <a href="/" className="text-primary font-weight-bold mb-1 d-block">
                                    Audrey Tobey
                                </a>
                                <small>
                                    Uploaded a photo <span className="font-weight-bold">"Error.jpg"</span>{' '}
                                </small>
                                <p className="mb-0 pb-2">
                                    <small className="text-muted">14 hours ago</small>
                                </p>
                            </div>
                        </TimelineItem>
                        <TimelineItem>
                            <i className="mdi mdi-airplane bg-primary-lighten text-primary timeline-icon"></i>
                            <div className="timeline-item-info">
                                <a href="/" className="text-primary font-weight-bold mb-1 d-block">
                                    Product on the Bootstrap Market
                                </a>
                                <small>
                                    Dave Gamache added
                                    <span className="font-weight-bold">Admin Dashboard</span>
                                </small>
                                <p className="mb-0 pb-2">
                                    <small className="text-muted">30 minutes ago</small>
                                </p>
                            </div>
                        </TimelineItem>

                        <TimelineItem>
                            <i className="mdi mdi-microphone bg-info-lighten text-info timeline-icon"></i>
                            <div className="timeline-item-info">
                                <a href="/" className="text-info font-weight-bold mb-1 d-block">
                                    Robert Delaney
                                </a>
                                <small>
                                    Send you message
                                    <span className="font-weight-bold">"Are you there?"</span>
                                </small>
                                <p className="mb-0 pb-2">
                                    <small className="text-muted">2 hours ago</small>
                                </p>
                            </div>
                        </TimelineItem>

                        <TimelineItem>
                            <i className="mdi mdi-upload bg-primary-lighten text-primary timeline-icon"></i>
                            <div className="timeline-item-info">
                                <a href="/" className="text-primary font-weight-bold mb-1 d-block">
                                    Audrey Tobey
                                </a>
                                <small>
                                    Uploaded a photo <span className="font-weight-bold">"Error.jpg"</span>{' '}
                                </small>
                                <p className="mb-0 pb-2">
                                    <small className="text-muted">14 hours ago</small>
                                </p>
                            </div>
                        </TimelineItem>
                    </Timeline>
                </SimpleBar>
            </CardBody>
        </Card>
    );
};

export default Activity;
