// @flow
import React from 'react';
import {
    Row,
    Col,
    Card,
    CardBody,
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import classnames from 'classnames';

import SimpleBar from 'simplebar-react';

import PageTitle from '../../components/PageTitle';
import StatisticsWidget from '../../components/StatisticsWidget';
import StatisticsChartWidget from '../../components/StatisticsChartWidget';
import StatisticsChartWidget2 from '../../components/StatisticsChartWidget2';
import ChatList from '../../components/ChatList';
import Timeline from '../../components/Timeline';
import TimelineItem from '../../components/TimelineItem';

import profileImg from '../../assets/images/users/avatar-2.jpg';
import profilePic from '../../assets/images/users/avatar-1.jpg';
import profilePic2 from '../../assets/images/users/avatar-5.jpg';
import emailImg from '../../assets/images/email-campaign.svg';
import reportImg from '../../assets/images/report.svg';

const ProfileCard = () => {
    const profileStats = [{ label: 'Total Revenue', value: '$ 25,184' }, { label: 'Number of Orders', value: '5482' }];

    return (
        <Card className={classnames('widget-flat')}>
            <CardBody>
                <span className="float-left m-2 mr-4">
                    <img src={profileImg} style={{ height: '100px' }} alt="" className="rounded-circle img-thumbnail" />
                </span>

                <div className="media-body">
                    <h4 className="mt-1 mb-1">Michael Franklin</h4>
                    <p className="font-13"> Authorised Brand Seller</p>

                    <ul className="mb-0 list-inline">
                        {profileStats.map((stat, i) => {
                            return (
                                <li className="list-inline-item mr-3" key={i + '-stat'}>
                                    <h5 className="mb-1">{stat.value}</h5>
                                    <p className="mb-0 font-13">{stat.label}</p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </CardBody>
        </Card>
    );
};

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

                <SimpleBar style={{ maxHeight: '390px', width: '100%' }}>
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

const Widgets = () => {
    const chatMessages = [
        { id: 1, userPic: profilePic2, userName: 'Geneva', text: 'Hello!', postedOn: '10:00' },
        {
            id: 2,
            userPic: profilePic,
            userName: 'Dominic',
            text: 'Hi, How are you? What about our next meeting?',
            postedOn: '10:01',
        },
        { id: 3, userPic: profilePic2, userName: 'Geneva', text: 'Yeah everything is fine', postedOn: '10:02' },
        { id: 4, userPic: profilePic, userName: 'Dominic', text: "Wow that's great!", postedOn: '10:03' },
        { id: 5, userPic: profilePic, userName: 'Dominic', text: 'Cool!', postedOn: '10:03' },
    ];

    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: 'UI', path: '/ui/widgets' },
                    { label: 'Base UI', path: '/ui/widgets' },
                    { label: 'Widgets', path: '/ui/widgets', active: true },
                ]}
                title={'Widgets'}
            />

            <Row>
                <Col lg={4}>
                    {/* profile widget */}
                    <ProfileCard />
                </Col>

                {/* chart based widget */}
                <Col lg={4}>
                    <StatisticsChartWidget2
                        name="Hyper Sales"
                        type="area"
                        title="$424,652"
                        subtitle="Sales"
                        data={[
                            47,
                            45,
                            54,
                            38,
                            56,
                            24,
                            65,
                            31,
                            37,
                            39,
                            62,
                            51,
                            35,
                            41,
                            35,
                            27,
                            93,
                            53,
                            61,
                            27,
                            54,
                            43,
                            19,
                            46,
                        ]}></StatisticsChartWidget2>
                </Col>
                <Col lg={4}>
                    <StatisticsChartWidget2
                        name="Net Profits"
                        type="bar"
                        title="$135,965"
                        subtitle="Profits"
                        colors={['#0acf97']}
                        data={[
                            47,
                            45,
                            54,
                            38,
                            56,
                            24,
                            65,
                            31,
                            37,
                            39,
                            62,
                            51,
                            35,
                            41,
                            35,
                            27,
                            93,
                            53,
                            61,
                            27,
                            54,
                            43,
                            19,
                            46,
                        ]}></StatisticsChartWidget2>
                </Col>
            </Row>

            {/* StatisticsWidget */}
            <Row>
                <Col lg={3}>
                    <StatisticsWidget
                        icon="mdi mdi-account-multiple"
                        description="Number of Customers"
                        title="Customers"
                        stats="36,254"
                        trend={{
                            textClass: 'text-success',
                            icon: 'mdi mdi-arrow-up-bold',
                            value: '5.27%',
                            time: 'Since last month',
                        }}></StatisticsWidget>
                </Col>
                <Col lg={3}>
                    <StatisticsWidget
                        icon="mdi mdi-cart-plus"
                        description="Number of Orders"
                        title="Orders"
                        stats="5,543"
                        trend={{
                            textClass: 'text-danger',
                            icon: 'mdi mdi-arrow-down-bold',
                            value: '1.08%',
                            time: 'Since last month',
                        }}></StatisticsWidget>
                </Col>
                <Col lg={3}>
                    <StatisticsWidget
                        icon="mdi mdi-currency-usd bg-white text-success"
                        description="Revenue"
                        title="Revenue"
                        stats="$6,254"
                        trend={{
                            textClass: 'text-white',
                            icon: 'mdi mdi-arrow-down-bold',
                            value: '7.00%',
                            time: 'Since last month',
                        }}
                        bgclassName="bg-success"
                        textClass="text-white"></StatisticsWidget>
                </Col>
                <Col lg={3}>
                    <StatisticsWidget
                        icon="mdi mdi-pulse bg-light-lighten rounded-circle text-white"
                        description="Growth"
                        title="Growth"
                        stats="+ 30.56%"
                        trend={{
                            textClass: 'text-white',
                            icon: 'mdi mdi-arrow-up-bold',
                            value: '4.87%',
                            time: 'Since last month',
                        }}
                        bgclassName="bg-primary"
                        textClass="text-white"></StatisticsWidget>
                </Col>
            </Row>

            {/* Statistics Widget with chart */}
            <Row>
                <Col lg={3}>
                    <StatisticsChartWidget
                        description="Campaign Sent"
                        title="Campaign Sent"
                        stats="9,184"
                        trend={{ textClass: 'text-success', icon: 'mdi mdi-arrow-up-bold', value: '3.00%' }}
                        colors={['#0acf97']}
                        data={[47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35]}></StatisticsChartWidget>
                </Col>
                <Col lg={3}>
                    <StatisticsChartWidget
                        description="New Leads"
                        title="New Leads"
                        stats="3,254"
                        trend={{ textClass: 'text-success', icon: 'mdi mdi-arrow-up-bold', value: '5.00%' }}
                        colors={['#727cf5']}
                        type="line"
                        data={[47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35]}></StatisticsChartWidget>
                </Col>
                <Col lg={3}>
                    <StatisticsChartWidget
                        description="Deals"
                        title="Deals"
                        stats="861"
                        trend={{ textClass: 'text-success', icon: 'mdi mdi-arrow-up-bold', value: '10.00%' }}
                        colors={['#0acf97']}
                        type="line"
                        data={[47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35]}></StatisticsChartWidget>
                </Col>
                <Col lg={3}>
                    <StatisticsChartWidget
                        description="Booked Revenue"
                        title="Booked Revenue"
                        stats="$253k"
                        trend={{ textClass: 'text-success', icon: 'mdi mdi-arrow-up-bold', value: '10.50%' }}
                        colors={['#727cf5']}
                        type="area"
                        data={[47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35]}></StatisticsChartWidget>
                </Col>
            </Row>

            {/* chat */}
            <Row>
                <Col lg={4}>
                    <ChatList messages={chatMessages}></ChatList>
                </Col>

                {/* static widget */}
                <Col lg={4}>
                    <Card className="cta-box bg-danger text-white">
                        <CardBody>
                            <div className="media align-items-center">
                                <div className="media-body">
                                    <h2 className="mt-0">
                                        <i className="mdi mdi-bullhorn-outline"></i>
                                    </h2>
                                    <h3 className="m-0 font-weight-normal cta-box-title">
                                        Enhance your <b>Campaign</b> for better outreach{' '}
                                        <i className="mdi mdi-arrow-right-bold-outline"></i>
                                    </h3>
                                </div>
                                <img className="ml-3" src={emailImg} width="120" alt="" />
                            </div>
                        </CardBody>
                    </Card>

                    <Card className="cta-box bg-primary text-white">
                        <CardBody>
                            <div className="text-center">
                                <h3 className="m-0 font-weight-normal cta-box-title">
                                    Enhance your <b>Campaign</b> for better outreach
                                </h3>

                                <img className="my-3" src={reportImg} width="180" alt="" />
                                <br />
                                <a href="/" className="btn btn-sm btn-light btn-rounded">
                                    Know More <i className="mdi mdi-arrow-right"></i>
                                </a>
                            </div>
                        </CardBody>
                    </Card>
                </Col>

                <Col lg={4}>
                    <Activity />
                </Col>
            </Row>

            {/* static widget */}
            <Row>
                <Col lg={4}>
                    <Card className="text-white bg-info overflow-hidden">
                        <CardBody>
                            <div className="toll-free-box text-center">
                                <h4>
                                    {' '}
                                    <i className="mdi mdi-deskphone"></i> Toll Free : 1-234-567-8901
                                </h4>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card className="text-white bg-danger overflow-hidden">
                        <CardBody>
                            <div className="toll-free-box text-center">
                                <h4>
                                    {' '}
                                    <i className="mdi mdi-headset"></i> Need help ? Just contact us
                                </h4>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card className="text-white bg-success overflow-hidden">
                        <CardBody>
                            <div className="toll-free-box text-center">
                                <h4>
                                    {' '}
                                    <i className="mdi mdi-deskphone"></i> Toll Free : 1-234-567-8901
                                </h4>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Widgets;
