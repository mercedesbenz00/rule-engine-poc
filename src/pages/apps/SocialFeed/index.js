import React from 'react';
import { Row, Col } from 'reactstrap';

import PageTitle from '../../../components/PageTitle';
import UserProfile from './UserProfile';
import Events from './Events';
import News from './News';
import Feeds from './Feeds';
import FeaturedVideo from './FeaturedVideo';
import Followers from './Followers';

// SocialFeed
const SocialFeed = () => {
    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Apps', path: '/apps/social' },
                    { label: 'Social', path: '/apps/social', active: true },
                ]}
                title={'Social'}
            />

            <Row>
                <Col xl={3} lg={6} className="order-lg-1 order-xl-1">
                    <UserProfile />
                    <Events />
                    <News />
                </Col>

                <Col xl={6} lg={12} className="order-lg-2 order-xl-1">
                    <Feeds />
                </Col>

                <Col xl={3} lg={6} className="order-lg-1 order-xl-2">
                    <FeaturedVideo />
                    <Followers />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default SocialFeed;
