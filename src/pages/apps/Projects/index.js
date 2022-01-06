// @flow
import React from 'react';
import {
    Row,
    Col,
    Card,
    CardBody,
    Button,
    ButtonGroup,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Progress,
} from 'reactstrap';
import classNames from 'classnames';

import avatar1 from '../../../assets/images/users/avatar-6.jpg';
import avatar2 from '../../../assets/images/users/avatar-7.jpg';
import avatar3 from '../../../assets/images/users/avatar-8.jpg';
import projectImg1 from '../../../assets/images/projects/project-1.jpg';
import projectImg2 from '../../../assets/images/projects/project-2.jpg';
import projectImg3 from '../../../assets/images/projects/project-3.jpg';
import projectImg4 from '../../../assets/images/projects/project-4.jpg';

import PageTitle from '../../../components/PageTitle';

// single project
const SingleProject = props => {
    const project = props.project || {};

    return (
        <Card className="d-block">
            {project.image && (
                <React.Fragment>
                    <img className="card-img-top" src={project.image} alt="" />
                    <div className="card-img-overlay">
                        <div
                            className={classNames(
                                'badge',
                                {
                                    'badge-success': project.state === 'Finished',
                                    'badge-secondary': project.state === 'Ongoing',
                                    'badge-warning': project.state === 'Planned',
                                },
                                'p-1'
                            )}>
                            {project.state}
                        </div>
                    </div>
                </React.Fragment>
            )}

            <CardBody className={project.image ? 'position-relative' : ''}>
                {!project.image && (
                    <UncontrolledDropdown className="card-widgets">
                        <DropdownToggle tag="a" className="arrow-none cursor-pointer">
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
                )}

                <h4 className="mt-0">
                    <a href="/" className="text-title">
                        {project.title}
                    </a>
                </h4>

                {!project.image && (
                    <div
                        className={classNames(
                            'badge',
                            {
                                'badge-success': project.state === 'Finished',
                                'badge-secondary': project.state === 'Ongoing',
                                'badge-warning': project.state === 'Planned',
                            },
                            'mb-3',
                            'p-1'
                        )}>
                        {project.state}
                    </div>
                )}

                <p className="text-muted font-13 mb-3">
                    {project.shortDesc}
                    <a href="/" className="font-weight-bold text-muted">
                        view more
                    </a>
                </p>

                <p className="mb-1">
                    <span className="pr-2 text-nowrap mb-2 d-inline-block">
                        <i className="mdi mdi-format-list-bulleted-type text-muted mr-1"></i>
                        <b>{project.totalTasks}</b> Tasks
                    </span>
                    <span className="text-nowrap mb-2 d-inline-block">
                        <i className="mdi mdi-comment-multiple-outline text-muted mr-1"></i>
                        <b>{project.totalComments}</b> Comments
                    </span>
                </p>
                <div>
                    <a
                        href="/"
                        data-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-original-title="Mat Helme"
                        className="d-inline-block mr-1">
                        <img src={avatar3} className="rounded-circle avatar-xs" alt="friend" />
                    </a>

                    <a
                        href="/"
                        data-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-original-title="Michael Zenaty"
                        className="d-inline-block mr-1">
                        <img src={avatar1} className="rounded-circle avatar-xs" alt="friend" />
                    </a>

                    <a
                        href="/"
                        data-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-original-title="James Anderson"
                        className="d-inline-block">
                        <img src={avatar2} className="rounded-circle avatar-xs" alt="friend" />
                    </a>
                    {project.totalMembers - 3 > 0 && (
                        <a href="/" className="d-inline-block text-muted font-weight-bold ml-2">
                            +{project.totalMembers - 3} more
                        </a>
                    )}
                </div>

                {project.image && (
                    <React.Fragment>
                        <p className="mt-3 mb-2 font-weight-bold">
                            Progress <span className="float-right">{project.progress}%</span>
                        </p>
                        {project.progress < 30 && (
                            <Progress value={project.progress} color="warning" className="progress-sm" />
                        )}
                        {project.progress > 30 && project.progress < 100 && (
                            <Progress value={project.progress} className="progress-sm" />
                        )}
                        {project.progress === 100 && (
                            <Progress value={project.progress} color="success" className="progress-sm" />
                        )}
                    </React.Fragment>
                )}
            </CardBody>

            {!project.image && (
                <ul className="list-group list-group-flush">
                    <li className="list-group-item p-3">
                        <p className="mb-2 font-weight-bold">
                            Progress <span className="float-right">{project.progress}%</span>
                        </p>

                        {project.progress < 30 && (
                            <Progress value={project.progress} color="warning" className="progress-sm" />
                        )}
                        {project.progress > 30 && project.progress < 100 && (
                            <Progress value={project.progress} className="progress-sm" />
                        )}
                        {project.progress === 100 && (
                            <Progress value={project.progress} color="success" className="progress-sm" />
                        )}
                    </li>
                </ul>
            )}
        </Card>
    );
};

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Ubold v3.0 - Redesign',
            state: 'Finished',
            shortDesc: 'With supporting text below as a natural lead-in to additional contenposuere erat a ante',
            totalTasks: 21,
            totalComments: 741,
            totalMembers: 10,
            progress: 100,
        },
        {
            id: 2,
            title: 'Minton v3.0 - Redesign',
            state: 'Ongoing',
            shortDesc:
                'This card has supporting text below as a natural lead-in to additional content is a little bit longer',
            totalTasks: 81,
            totalComments: 103,
            totalMembers: 6,
            progress: 21,
        },
        {
            id: 3,
            title: 'Hyper v2.1 - Angular and Django',
            state: 'Ongoing',
            shortDesc: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid',
            totalTasks: 12,
            totalComments: 48,
            totalMembers: 2,
            progress: 66,
        },
        {
            id: 4,
            title: 'Hyper v2.1 - React, Webpack',
            state: 'Finished',
            shortDesc: "Some quick example text to build on the card title and make up the bulk of the card's content",
            totalTasks: 50,
            totalComments: 1024,
            totalMembers: 5,
            progress: 100,
        },
        {
            id: 5,
            title: 'Hyper 2.2 - Vue.Js and Laravel',
            state: 'Ongoing',
            image: projectImg1,
            shortDesc:
                'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.',
            totalTasks: 3,
            totalComments: 104,
            totalMembers: 3,
            progress: 45,
        },
        {
            id: 6,
            title: 'Hyper 2.3 - Rails, NodeJs, Mean',
            state: 'Planned',
            image: projectImg2,
            shortDesc:
                'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.',
            totalTasks: 11,
            totalComments: 201,
            totalMembers: 5,
            progress: 100,
        },
        {
            id: 7,
            title: 'Hyper - Landing page and UI Kit',
            state: 'Planned',
            image: projectImg3,
            shortDesc:
                'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.',
            totalTasks: 3,
            totalComments: 104,
            totalMembers: 3,
            progress: 45,
        },
        {
            id: 8,
            title: 'Hyper 3.0 - Scoping',
            state: 'Finished',
            image: projectImg4,
            shortDesc:
                'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.',
            totalTasks: 3,
            totalComments: 104,
            totalMembers: 3,
            progress: 45,
        },
    ];

    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Projects', path: '/apps/projects' },
                    { label: 'List', path: '/apps/projects', active: true },
                ]}
                title={'Projects'}
            />

            <Row className="mb-2">
                <Col sm={4}>
                    <Button color="danger" className="btn-rounded mb-3">
                        <i className="mdi mdi-plus"></i> Create Project
                    </Button>
                </Col>
                <Col sm={8}>
                    <div className="text-sm-right">
                        <div className="btn-group mb-3">
                            <Button color="primary">All</Button>
                        </div>
                        <ButtonGroup className="btn-group mb-3 ml-1">
                            <Button color="light">Ongoing</Button>
                            <Button color="light">Finished</Button>
                        </ButtonGroup>

                        <div className="btn-group mb-3 ml-2 d-none d-sm-inline-block">
                            <Button color="secondary">
                                <i className="dripicons-view-apps"></i>
                            </Button>
                        </div>
                        <div className="btn-group mb-3 d-none d-sm-inline-block">
                            <Button color="link" className="text-muted">
                                <i className="dripicons-checklist"></i>
                            </Button>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className="mb-2">
                {projects.map((project, i) => {
                    return (
                        <Col md={6} xl={3} key={'proj-' + project.id}>
                            <SingleProject project={project} />
                        </Col>
                    );
                })}
            </Row>
        </React.Fragment>
    );
};

export default Projects;
