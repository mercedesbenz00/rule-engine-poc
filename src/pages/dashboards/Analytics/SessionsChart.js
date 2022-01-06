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
    UncontrolledAlert,
} from 'reactstrap';

const SessionsChart = () => {
    const colors = ['#0acf97'];

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

    const apexBarChartOpts = {
        grid: {
            padding: {
                left: 0,
                right: 0,
            },
        },
        chart: {
            height: 309,
            type: 'area',
            parentHeightOffset: 0,
            toolbar: {
                show: false,
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
                    return val + 'k';
                },
                offsetX: -15,
            },
        },
        fill: {
            type: 'gradient',
            gradient: {
                type: 'vertical',
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.45,
                opacityTo: 0.1,
                stops: [45, 100],
            },
        },
    };

    const apexBarChartData = [
        {
            name: 'Sessions',
            data: [10, 20, 5, 15, 10, 20, 15, 25, 20, 30, 25, 40, 30, 50, 35],
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

                <ul className="nav float-right d-none d-lg-flex">
                    <li className="nav-item">
                        <a className="nav-link text-muted" href="/">
                            Today
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-muted" href="/">
                            7d
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="/">
                            15d
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-muted" href="/">
                            1m
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-muted" href="/">
                            1y
                        </a>
                    </li>
                </ul>

                <h4 className="header-title mb-3">Sessions Overview</h4>

                <UncontrolledAlert color="warning">
                    Property HY1xx is not receiving hits. Either your site is not receiving any sessions or it is not
                    tagged correctly.
                </UncontrolledAlert>

                <Chart
                    options={apexBarChartOpts}
                    series={apexBarChartData}
                    type="area"
                    className="apex-charts mt-3"
                    height={308}
                />
            </CardBody>
        </Card>
    );
};

export default SessionsChart;
