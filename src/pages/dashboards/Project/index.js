// @flow
import React from 'react';
import { Row, Col } from 'reactstrap';

import PageTitle from '../../../components/PageTitle';
import Statistics from './Statistics';
import Status from './Status';
import Tasks from './Tasks';
import TasksChart from './TasksChart';
import Activity from './Activity';
import Calendar from './Calendar';

const ProjectDashboardPage = () => {
    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Dashboard', path: '/' },
                    { label: 'Project', path: '/dashboard/project', active: true },
                ]}
                title={'Project Dashboard'}
            />

            <Statistics />

            <Row>
                <Col xl={4} md={6}>
                    <Status />
                </Col>
                <Col xl={8} md={6}>
                    <Tasks />
                </Col>
            </Row>

            <Row>
                <Col>
                    <TasksChart />
                </Col>
            </Row>

            <Row>
                <Col xl={5}>
                    <Activity />
                </Col>
                <Col xl={7}>
                    <Calendar />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default ProjectDashboardPage;
