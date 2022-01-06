// @flow
import React from 'react';
import { Row, Col } from 'reactstrap';

import PageTitle from '../../../components/PageTitle';
import Statistics from './Statistics';
import CampaignsChart from './CampaignsChart';
import RevenueChart from './RevenueChart';
import Leads from './Leads';
import Performers from './Performers';
import CampaignWidget from './CampaignWidget';

const CRMDashboardPage = () => {
    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Dashboard', path: '/dashboard/crm' },
                    { label: 'CRM', path: '/dashboard/crm', active: true },
                ]}
                title={'CRM'}
            />

            <Statistics />

            <Row>
                <Col xl={5}>
                    <CampaignsChart />
                </Col>
                <Col xl={7}>
                    <RevenueChart />
                </Col>
            </Row>

            <Row>
                <Col xl={4} lg={6}>
                    <Performers />
                </Col>
                <Col xl={4} lg={6}>
                    <Leads />
                </Col>
                <Col xl={4} lg={6}>
                    <CampaignWidget />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default CRMDashboardPage;
