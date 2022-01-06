// @flow
import React from 'react';
import { Row, Col } from 'reactstrap';

import StatisticsChartWidget from '../../../components/StatisticsChartWidget';

const Statistics = () => {
    return (
        <React.Fragment>
            <Row>
                <Col md={6} xl={3}>
                    <StatisticsChartWidget
                        description="Campaign Sent"
                        title="Campaign Sent"
                        stats="9,184"
                        trend={{ textClass: 'text-success', icon: 'mdi mdi-arrow-up-bold', value: '3.00%' }}
                        colors={['#727cf5']}
                        data={[47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35]}></StatisticsChartWidget>
                </Col>

                <Col md={6} xl={3}>
                    <StatisticsChartWidget
                        description="New Leads"
                        title="New Leads"
                        stats="3,254"
                        trend={{ textClass: 'text-danger', icon: 'mdi mdi-arrow-down-bold', value: '5.00%' }}
                        colors={['#727cf5']}
                        type="line"
                        data={[47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35]}></StatisticsChartWidget>
                </Col>
                <Col md={6} xl={3}>
                    <StatisticsChartWidget
                        description="Deals"
                        title="Deals"
                        stats="861"
                        trend={{ textClass: 'text-success', icon: 'mdi mdi-arrow-up-bold', value: '10.00%' }}
                        colors={['#0acf97']}
                        type="line"
                        data={[47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35]}></StatisticsChartWidget>
                </Col>

                <Col md={6} xl={3}>
                    <StatisticsChartWidget
                        description="Booked Revenue"
                        title="Booked Revenue"
                        stats="$253k"
                        trend={{ textClass: 'text-success', icon: 'mdi mdi-arrow-up-bold', value: '10.50%' }}
                        colors={['#0acf97']}
                        type="area"
                        data={[47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35]}></StatisticsChartWidget>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Statistics;
