// @flow
import React from 'react';
import Chart from 'react-apexcharts';
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

const RevenueChart = () => {
    const apexLineChartWithLables = {
        chart: {
            height: 364,
            type: 'line',
            dropShadow: {
                enabled: true,
                opacity: 0.1,
                blur: 7,
                left: -7,
                top: 7,
            },
            toolbar: {
                show: false,
            },
            parentHeightOffset: 0,
        },
        grid: {
            padding: {
                left: 0,
                right: 0,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth',
            width: 4,
        },
        zoom: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        colors: ['#727cf5', '#0acf97', '#fa5c7c', '#ffbc00'],
        xaxis: {
            type: 'string',
            categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            tooltip: {
                enabled: false,
            },
            axisBorder: {
                show: false,
            },
        },
        yaxis: {
            labels: {
                formatter: function(val) {
                    return val + 'k';
                },
            },
        },
    };

    const apexLineChartWithLablesData = [
        {
            name: 'Current Week',
            data: [10, 20, 15, 25, 20, 30, 20],
        },
        {
            name: 'Previous Week',
            data: [0, 15, 10, 30, 15, 35, 25],
        },
    ];

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

                <h4 className="header-title mb-3">Revenue</h4>

                <div className="chart-content-bg">
                    <Row className="text-center">
                        <Col className="col-md-6">
                            <p className="text-muted mb-0 mt-3">Current Week</p>
                            <h2 className="font-weight-normal mb-3">
                                <small className="mdi mdi-checkbox-blank-circle text-primary align-middle mr-1"></small>
                                <span>$58,254</span>
                            </h2>
                        </Col>

                        <Col className="col-md-6">
                            <p className="text-muted mb-0 mt-3">Previous Week</p>
                            <h2 className="font-weight-normal mb-3">
                                <small className="mdi mdi-checkbox-blank-circle text-success align-middle mr-1"></small>
                                <span>$69,524</span>
                            </h2>
                        </Col>
                    </Row>
                </div>

                <div className="dash-item-overlay d-none d-md-block">
                    <h5>Today's Earning: $2,562.30</h5>
                    <p className="text-muted font-13 mb-3 mt-2">
                        Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
                        rhoncus...
                    </p>
                    <a href="/" className="btn btn-outline-primary">
                        View Statements
                        <i className="mdi mdi-arrow-right ml-2"></i>
                    </a>
                </div>

                <Chart
                    options={apexLineChartWithLables}
                    series={apexLineChartWithLablesData}
                    type="line"
                    className="apex-charts mt-3"
                    height={364}
                />
            </CardBody>
        </Card>
    );
};

export default RevenueChart;
