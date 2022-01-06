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

const Status = () => {
    const colors = ['#0acf97', '#727cf5', '#fa5c7c'];

    const getDaysInMonth = (month, year) => {
        var date = new Date(year, month, 1);
        var days = [];
        var idx = 0;
        while (date.getMonth() === month && idx < 15) {
            var d = new Date(date);
            days.push(d.getDate() + ' ' + d.toLocaleString('en-us', { month: 'short' }));
            date.setDate(date.getDate() + 1);
            idx += 1;
        }
        return days;
    };

    const now = new Date();
    const labels = getDaysInMonth(now.getMonth() + 1, now.getFullYear());

    const apexOpts = {
        grid: {
            padding: {
                left: 0,
                right: 0,
            },
        },
        chart: {
            type: 'donut',
            parentHeightOffset: 0,
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        zoom: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        labels: ['Completed', 'In-progress', 'Behind'],
        colors: colors,
        xaxis: {
            type: 'string',
            categories: labels,
            tooltip: {
                enabled: false,
            },
            axisBorder: {
                show: false,
            },
            labels: {},
        },
        yaxis: {
            labels: {
                formatter: function(val) {
                    return val + '%';
                },
                offsetX: -15,
            },
        },
    };

    const apexData = [64, 26, 10];

    return (
        <Card>
            <CardBody>
                <UncontrolledButtonDropdown className="float-right">
                    <DropdownToggle tag="button" className="btn btn-link arrow-none card-drop p-0">
                        <i className="mdi mdi-dots-vertical"></i>
                    </DropdownToggle>

                    <DropdownMenu right>
                        <DropdownItem>Export Report</DropdownItem>
                        <DropdownItem>Print</DropdownItem>
                    </DropdownMenu>
                </UncontrolledButtonDropdown>

                <h4 className="header-title mb-3">Project Status</h4>

                <Chart options={apexOpts} series={apexData} type="donut" className="apex-charts mt-3" height={236} />

                <Row className="row text-center mt-2 py-2">
                    <Col lg={4}>
                        <i className="mdi mdi-trending-up text-success mt-3 h3"></i>
                        <h3 className="font-weight-normal">
                            <span>64%</span>
                        </h3>
                        <p className="text-muted mb-0">Completed</p>
                    </Col>

                    <Col lg={4}>
                        <i className="mdi mdi-trending-down text-primary mt-3 h3"></i>
                        <h3 className="font-weight-normal">
                            <span>26%</span>
                        </h3>
                        <p className="text-muted mb-0"> In-progress</p>
                    </Col>

                    <Col lg={4}>
                        <i className="mdi mdi-trending-down text-danger mt-3 h3"></i>
                        <h3 className="font-weight-normal">
                            <span>10%</span>
                        </h3>
                        <p className="text-muted mb-0"> Behind</p>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
};

export default Status;
