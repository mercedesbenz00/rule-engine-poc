import React from 'react';
import { Row, Col, Card, CardBody, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import classNames from 'classnames';

import ProgressChart from './ProgressChart';
import PageTitle from '../../../../components/PageTitle';
import Comments from './Comments';
import Files from './Files';
import TeamMembers from './TeamMembers';

const ProjectDetail = () => {
    const project = {
        title: 'Minton v3.0 - Redesign',
        shortDesc:
            'This card has supporting text below as a natural lead-in to additional content is a little bit longer',
        state: 'Ongoing',
        totalTasks: 81,
        totalComments: 103,
        totalMembers: 6,
        startDate: '17 March 2018',
        startTime: '1:00 PM',
        endDate: '22 December 2018',
        endTime: '1:00 PM',
        totalBudget: '$15,800',
    };

    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Projects', path: '/apps/projects' },
                    { label: 'Details', path: '/apps/projects/detail', active: true },
                ]}
                title={'Project Details'}
            />

            <Row>
                <Col xl={8} lg={6}>
                    <Card className="d-block">
                        <CardBody>
                            <UncontrolledDropdown className="card-widgets">
                                <DropdownToggle tag="a" href="#" className="arrow-none">
                                    <i className="dripicons-dots-3"></i>
                                </DropdownToggle>

                                <DropdownMenu right>
                                    <DropdownItem>
                                        <i className="mdi mdi-pencil mr-1"></i>Edit
                                    </DropdownItem>
                                    <DropdownItem>
                                        <i className="mdi mdi-delete mr-1"></i>Delete
                                    </DropdownItem>
                                    <DropdownItem>
                                        <i className="mdi mdi-email-outline mr-1"></i>Invite
                                    </DropdownItem>
                                    <DropdownItem>
                                        <i className="mdi mdi-exit-to-app mr-1"></i>Leave
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>

                            <h3 className="mt-0">{project.title}</h3>
                            <div
                                className={classNames(
                                    'badge',
                                    {
                                        'badge-success': project.state === 'Finished',
                                        'badge-secondary': project.state === 'Ongoing',
                                        'badge-warning': project.state === 'Planned',
                                    },
                                    'mb-3'
                                )}>
                                {project.state}
                            </div>

                            <h5>Project Overview:</h5>

                            <p className="text-muted mb-2">
                                With supporting text below as a natural lead-in to additional contenposuere erat a ante.
                                Voluptates, illo, iste itaque voluptas corrupti ratione reprehenderit magni similique?
                                Tempore, quos delectus asperiores libero voluptas quod perferendis! Voluptate, quod illo
                                rerum? Lorem ipsum dolor sit amet.
                            </p>

                            <p className="text-muted mb-4">
                                Voluptates, illo, iste itaque voluptas corrupti ratione reprehenderit magni similique?
                                Tempore, quos delectus asperiores libero voluptas quod perferendis! Voluptate, quod illo
                                rerum? Lorem ipsum dolor sit amet. With supporting text below as a natural lead-in to
                                additional contenposuere erat a ante.
                            </p>

                            <Row>
                                <Col md={4}>
                                    <div className="mb-4">
                                        <h5>Start Date</h5>
                                        <p>
                                            {project.startDate}{' '}
                                            <small className="text-muted">{project.startTime}</small>
                                        </p>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className="mb-4">
                                        <h5>End Date</h5>
                                        <p>
                                            {project.endDate} <small className="text-muted">{project.endTime}</small>
                                        </p>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className="mb-4">
                                        <h5>Budget</h5>
                                        <p>{project.totalBudget}</p>
                                    </div>
                                </Col>
                            </Row>

                            <TeamMembers />
                        </CardBody>
                    </Card>

                    <Comments />
                </Col>

                <Col xl={4} lg={6}>
                    <ProgressChart />
                    <Files />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default ProjectDetail;
