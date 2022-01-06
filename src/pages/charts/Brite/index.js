// @flow
import React from 'react';
import { Row, Col } from 'reactstrap';

import PageTitle from '../../../components/PageTitle';

import BarChart from './BarChart';
import HorizontalBarChart from './HorizontalBarChart';
import StepChart from './StepChart';
import DonutChart from './DonutChart';
import LineChart from './LineChart';

const BriteChart = () => {
    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Charts', path: '/features/charts/brite' },
                    { label: 'Brite', path: '/features/charts/brite', active: true },
                ]}
                title={'Brite Charts'}
            />

            <Row>
                <Col xl={6}>
                    <BarChart />
                </Col>

                <Col xl={6}>
                    <HorizontalBarChart />
                </Col>
            </Row>

            <Row>
                <Col xl={6}>
                    <StepChart />
                </Col>

                <Col xl={6}>
                    <DonutChart />
                </Col>
            </Row>

            <Row>
                <Col xl={6}>
                    <LineChart />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default BriteChart;
