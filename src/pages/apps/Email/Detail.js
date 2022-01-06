import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Row,
    Col,
    Card,
    CardBody,
    Button,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    ButtonGroup,
    Progress,
    UncontrolledTooltip,
    Media,
} from 'reactstrap';

import PageTitle from '../../../components/PageTitle';
import avatarImg from '../../../assets/images/users/avatar-2.jpg';
import { emails } from './Data';

// left side panel
const LeftSide = props => {
    return (
        <React.Fragment>
            <button type="button" className="btn btn-danger btn-block" data-toggle="modal" data-target="#compose-modal">
                Compose
            </button>

            <div className="email-menu-list mt-3">
                <Link to="/apps/email/inbox" className="text-danger font-weight-bold">
                    <i className="dripicons-inbox mr-2"></i>Inbox
                    <span className="badge badge-danger-lighten float-right ml-2">{props.totalUnreadEmails}</span>
                </Link>
                <Link to="/apps/email/inbox">
                    <i className="dripicons-star mr-2"></i>Starred
                </Link>
                <Link to="/apps/email/inbox">
                    <i className="dripicons-clock mr-2"></i>Snoozed
                </Link>
                <Link to="/apps/email/inbox">
                    <i className="dripicons-document mr-2"></i>Draft
                    <span className="badge badge-info-lighten float-right ml-2">32</span>
                </Link>
                <Link to="/apps/email/inbox">
                    <i className="dripicons-exit mr-2"></i>Sent Mail
                </Link>
                <Link to="/apps/email/inbox">
                    <i className="dripicons-trash mr-2"></i>Trash
                </Link>
                <Link to="/apps/email/inbox">
                    <i className="dripicons-tag mr-2"></i>Important
                </Link>
                <Link to="/apps/email/inbox">
                    <i className="dripicons-warning mr-2"></i>Spam
                </Link>
            </div>

            <div className="mt-4">
                <h6 className="text-uppercase">Labels</h6>
                <div className="email-menu-list labels-list mt-2">
                    <Link to="/apps/email/inbox">
                        <i className="mdi mdi-circle font-13 text-info mr-2"></i>Updates
                    </Link>
                    <Link to="/apps/email/inbox">
                        <i className="mdi mdi-circle font-13 text-warning mr-2"></i>Friends
                    </Link>
                    <Link to="/apps/email/inbox">
                        <i className="mdi mdi-circle font-13 text-success mr-2"></i>Family
                    </Link>
                    <Link to="/apps/email/inbox">
                        <i className="mdi mdi-circle font-13 text-primary mr-2"></i>Social
                    </Link>
                    <Link to="/apps/email/inbox">
                        <i className="mdi mdi-circle font-13 text-danger mr-2"></i>Important
                    </Link>
                    <Link to="/apps/email/inbox">
                        <i className="mdi mdi-circle font-13 text-secondary mr-2"></i>Promotions
                    </Link>
                </div>
            </div>

            <div className="mt-5">
                <h4>
                    <span className="badge badge-pill p-1 px-2 badge-secondary-lighten">FREE</span>
                </h4>
                <h6 className="text-uppercase mt-3">Storage</h6>
                <Progress color="success" value={46} className="my-2 progress-sm" />
                <p className="text-muted font-13 mb-0">7.02 GB (46%) of 15 GB used</p>
            </div>
        </React.Fragment>
    );
};

// EmailDetail
class EmailDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            totalUnreadEmails: emails.filter(e => e.is_read === false).length,
            email: {
                avatar: avatarImg,
                subject: 'Your elite author Graphic Optimization reward is ready!',
                from_name: 'Steven Smith',
                from_email: 'jonathan@domain.com',
                recieved_on: 'Jul 24, 2019, 5:17 AM',
                attachments: [
                    { id: 1, name: 'Hyper-admin-design.zip', size: '2.3MB', ext: '.zip' },
                    { id: 2, name: 'Dashboard-design.jpg', size: '0.3MB', ext: '.jpg' },
                    { id: 3, name: 'Admin-bug-report.mp4', size: '4.1MB', ext: '.mp4' },
                ],
            },
        };
    }

    render() {
        return (
            <React.Fragment>
                <PageTitle
                    breadCrumbItems={[
                        { label: 'Email', path: '/apps/email/details' },
                        { label: 'Email Read', path: '/apps/email/details', active: true },
                    ]}
                    title={'Email Read'}
                />

                <Row>
                    <Col>
                        <Card>
                            <CardBody>
                                <div className="page-aside-left">
                                    <LeftSide totalUnreadEmails={this.state.totalUnreadEmails} />
                                </div>

                                <div className="page-aside-right">
                                    <ButtonGroup className="mr-1 my-1">
                                        <Button id="archive">
                                            <i className="mdi mdi-archive font-16"></i>
                                        </Button>
                                        <UncontrolledTooltip placement="bottom" target="archive">
                                            Archived
                                        </UncontrolledTooltip>
                                        <Button id="spam">
                                            <i className="mdi mdi-alert-octagon font-16"></i>
                                        </Button>
                                        <UncontrolledTooltip placement="bottom" target="spam">
                                            Spam
                                        </UncontrolledTooltip>
                                        <Button id="delete">
                                            <i className="mdi mdi-delete-variant font-16"></i>
                                        </Button>
                                        <UncontrolledTooltip placement="bottom" target="delete">
                                            Delete
                                        </UncontrolledTooltip>
                                    </ButtonGroup>

                                    <UncontrolledDropdown className="d-inline-block mr-1 my-1">
                                        <DropdownToggle>
                                            <i className="mdi mdi-folder font-16"></i>
                                            <i className="mdi mdi-chevron-down"></i>
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <span className="dropdown-header">Move to:</span>
                                            <DropdownItem>Social</DropdownItem>
                                            <DropdownItem>Promotions</DropdownItem>
                                            <DropdownItem>Updates</DropdownItem>
                                            <DropdownItem>Forums</DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>

                                    <UncontrolledDropdown className="d-inline-block mr-1 my-1">
                                        <DropdownToggle>
                                            <i className="mdi mdi-label font-16"></i>
                                            <i className="mdi mdi-chevron-down"></i>
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <span className="dropdown-header">Label as:</span>
                                            <DropdownItem>Social</DropdownItem>
                                            <DropdownItem>Promotions</DropdownItem>
                                            <DropdownItem>Updates</DropdownItem>
                                            <DropdownItem>Forums</DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>

                                    <UncontrolledDropdown className="d-inline-block mr-1 my-1">
                                        <DropdownToggle>
                                            <i className="mdi mdi-dots-horizontal font-16"></i> More
                                            <i className="mdi mdi-chevron-down"></i>
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <span className="dropdown-header">More Options :</span>
                                            <DropdownItem>Mark as Unread</DropdownItem>
                                            <DropdownItem>Add to Tasks</DropdownItem>
                                            <DropdownItem>Add Star</DropdownItem>
                                            <DropdownItem>Mute</DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>

                                    <div className="mt-3">
                                        <h5 className="font-18">
                                            Your elite author Graphic Optimization reward is ready!
                                        </h5>
                                        <hr />

                                        <Media className="mb-3 mt-1">
                                            <Media left href="/">
                                                <img
                                                    className="d-flex mr-2 rounded-circle"
                                                    src={this.state.email.avatar}
                                                    alt={this.state.email.from_name}
                                                    height="32"
                                                />
                                            </Media>
                                            <Media body>
                                                <small className="float-right">{this.state.email.recieved_on}</small>
                                                <h6 className="m-0 font-14">{this.state.email.from_name}</h6>
                                                <small className="text-muted">
                                                    From: {this.state.email.from_email}
                                                </small>
                                            </Media>
                                        </Media>

                                        <p>Hi Coderthemes!</p>
                                        <p>
                                            Clicking ‘Order Service’ on the right-hand side of the above page will
                                            present you with an order page. This service has the following Briefing
                                            Guidelines that will need to be filled before placing your order:
                                        </p>

                                        <ol>
                                            <li>Your design preferences (Color, style, shapes, Fonts, others) </li>
                                            <li>Tell me, why is your item different? </li>
                                            <li>
                                                Do you want to bring up a specific feature of your item? If yes, please
                                                tell me{' '}
                                            </li>
                                            <li>
                                                Do you have any preference or specific thing you would like to change or
                                                improve on your item page?{' '}
                                            </li>
                                            <li>
                                                Do you want to include your item's or your provider's logo on the page?
                                                if yes, please send it to me in vector format (Ai or EPS){' '}
                                            </li>
                                            <li>Please provide me with the copy or text to display</li>
                                        </ol>

                                        <p>
                                            Filling in this form with the above information will ensure that they will
                                            be able to start work quickly.
                                        </p>
                                        <p>
                                            You can complete your order by putting your coupon code into the Promotional
                                            code box and clicking ‘Apply Coupon’.
                                        </p>
                                        <p>
                                            <b>Best,</b> <br /> Graphic Studio
                                        </p>
                                        <hr />

                                        <h5 className="mb-3">Attachments</h5>
                                        <Row>
                                            {this.state.email.attachments.map((f, idx) => {
                                                return (
                                                    <Col xl={4} key={idx}>
                                                        <Card className="mb-1 shadow-none border">
                                                            <div className="p-2">
                                                                <Row className="align-items-center">
                                                                    <Col className="col-auto">
                                                                        <div className="avatar-sm">
                                                                            <span className="avatar-title bg-primary-lighten text-primary rounded">
                                                                                {f.ext}
                                                                            </span>
                                                                        </div>
                                                                    </Col>
                                                                    <Col className="col pl-0">
                                                                        <a
                                                                            href="/"
                                                                            className="text-muted font-weight-bold">
                                                                            {f.name}
                                                                        </a>
                                                                        <p className="mb-0">{f.size}</p>
                                                                    </Col>
                                                                    <Col className="col-auto">
                                                                        <a
                                                                            href="/"
                                                                            className="btn btn-link btn-lg text-muted">
                                                                            <i className="dripicons-download"></i>
                                                                        </a>
                                                                    </Col>
                                                                </Row>
                                                            </div>
                                                        </Card>
                                                    </Col>
                                                );
                                            })}
                                        </Row>

                                        <div className="mt-5">
                                            <a href="/" className="btn btn-secondary mr-2">
                                                <i className="mdi mdi-reply mr-1"></i> Reply
                                            </a>
                                            <a href="/" className="btn btn-light">
                                                Forward <i className="mdi mdi-forward ml-1"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default EmailDetail;
