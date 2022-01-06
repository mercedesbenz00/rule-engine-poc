// @flow
import React from 'react';
import Chart from 'react-apexcharts';
import {
    Card,
    CardBody,
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Row,
    Col,
} from 'reactstrap';

const CampaignsChart = () => {
    const apexBarChartOpts = {
        grid: {
            padding: {
                left: 0,
                right: 0,
            },
        },
        chart: {
            height: 320,
            type: 'radialBar',
        },
        colors: ['#ffbc00', '#727cf5', '#0acf97'],
        labels: ['Total Sent', 'Reached', 'Opened'],
        plotOptions: {
            radialBar: {
                track: {
                    margin: 8,
                },
            },
        },
    };

    const apexBarChartData = [86, 36, 50];

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

                <h4 className="header-title mb-3">Campaigns</h4>

                <Chart
                    options={apexBarChartOpts}
                    series={apexBarChartData}
                    type="radialBar"
                    className="apex-charts"
                    height={320}
                />

                <Row className="row text-center mt-2">
                    <Col md={4}>
                        <i className="mdi mdi-send widget-icon bg-warning-lighten text-warning"></i>
                        <h3 className="font-weight-normal mt-3">
                            <span>6,510</span>
                        </h3>
                        <p className="text-muted mb-0 mb-2">
                            <i className="mdi mdi-checkbox-blank-circle text-warning"></i> Total Sent
                        </p>
                    </Col>
                    <Col md={4}>
                        <i className="mdi mdi-flag-variant widget-icon bg-primary-lighten text-primary"></i>
                        <h3 className="font-weight-normal mt-3">
                            <span>3,487</span>
                        </h3>
                        <p className="text-muted mb-0 mb-2">
                            <i className="mdi mdi-checkbox-blank-circle text-primary"></i> Reached
                        </p>
                    </Col>
                    <Col md={4}>
                        <i className="mdi mdi-email-open widget-icon bg-success-lighten text-success"></i>
                        <h3 className="font-weight-normal mt-3">
                            <span>1,568</span>
                        </h3>
                        <p className="text-muted mb-0 mb-2">
                            <i className="mdi mdi-checkbox-blank-circle text-success"></i> Opened
                        </p>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
};

export default CampaignsChart;
