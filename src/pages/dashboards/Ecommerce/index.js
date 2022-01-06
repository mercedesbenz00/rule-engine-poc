// @flow
import React from 'react';
import { Row, Col } from 'reactstrap';

import HyperDatepicker from '../../../components/Datepicker';
import Statistics from './Statistics';
import PerformanceChart from './PerformanceChart';
import RevenueChart from './RevenueChart';
import SalesChart from './SalesChart';
import Activity from './Activity';
import Products from './Products';

const EcommerceDashboardPage = () => {
    return (
        <React.Fragment>
            <Row>
                <Col>
                    <div className="page-title-box">
                        <div className="page-title-right">
                            <form className="form-inline">
                                <div className="form-group">
                                    <HyperDatepicker />
                                </div>
                                <button className="btn btn-primary ml-2">
                                    <i className="mdi mdi-autorenew"></i>
                                </button>
                                <button className="btn btn-primary ml-1">
                                    <i className="mdi mdi-filter-variant"></i>
                                </button>
                            </form>
                        </div>
                        <h4 className="page-title">Dashboard</h4>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col xl={5}>
                    <Statistics />
                </Col>

                <Col xl={7}>
                    <PerformanceChart />
                </Col>
            </Row>

            <Row>
                <Col xl={9}>
                    <RevenueChart />
                </Col>
                <Col xl={3}>
                    <SalesChart />
                </Col>
            </Row>

            <Row>
                <Col xl={3}>
                    <Activity />
                </Col>
                <Col>
                    <Products />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default EcommerceDashboardPage;
