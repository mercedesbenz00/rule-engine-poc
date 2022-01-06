// @flow
import React from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';

import PageTitle from '../../components/PageTitle';

import UserBox from './UserBox';
import SellerBox from './SellerBox';
import Messages from './Messages';
import BarChart from './BarChart';
import Statistics from './Statistics';
import Products from './Products';

const Profile = () => {
    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Pages', path: '/pages/profile' },
                    { label: 'Profile', path: '/pages/profile', active: true },
                ]}
                title={'Profile'}
            />

            <Row>
                <Col sm={12}>
                    {/* User information */}
                    <UserBox />
                </Col>
            </Row>

            <Row>
                <Col md={4}>
                    {/* User's seller information */}
                    <SellerBox />

                    {/* Contact information */}
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

                    {/* User's recent messages */}
                    <Messages />
                </Col>

                <Col md={8}>
                    {/* User's performance */}
                    <BarChart />

                    {/* Some statistics */}
                    <Statistics />

                    {/* Products */}
                    <Products />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Profile;
