// @flow
import React from 'react';
import Chart from 'react-apexcharts';
import { Card, CardBody, UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const TasksChart = () => {
    var categories = [];
    for (var i = 1; i <= 24; i++) {
        categories.push('Sprint ' + i);
    }

    const apexOpts = {
        grid: {
            padding: {
                left: 0,
                right: 0,
            },
        },
        chart: {
            height: 150,
            type: 'bar',
            stacked: true,
            parentHeightOffset: 0,
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '30%',
                dataLabels: {
                    position: 'top', // top, center, bottom
                },
            },
        },
        dataLabels: {
            enabled: true,
            offsetY: -24,
            style: {
                fontSize: '12px',
                colors: ['#98a6ad'],
            },
        },
        zoom: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        colors: ['#727cf5'],
        xaxis: {
            categories: categories,
            axisTicks: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
        },
        yaxis: {
            labels: {
                show: false,
            },
        },
        fill: {
            type: 'gradient',
            gradient: {
                inverseColors: !0,
                shade: 'light',
                type: 'horizontal',
                shadeIntensity: 0.25,
                gradientToColors: void 0,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100, 100, 100],
            },
        },
        tooltip: {
            y: {
                formatter: function(val) {
                    return val;
                },
            },
        },
    };

    const apexData = [
        {
            name: 'Tasks',
            data: [16, 44, 32, 48, 72, 60, 84, 64, 78, 50, 68, 34, 26, 44, 32, 48, 72, 60, 74, 52, 62, 50, 32, 22],
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
                        <DropdownItem>Export Report</DropdownItem>
                        <DropdownItem>Print</DropdownItem>
                    </DropdownMenu>
                </UncontrolledButtonDropdown>

                <h4 className="header-title mb-4">Tasks Overview</h4>

                <Chart options={apexOpts} series={apexData} type="bar" height={320} className="apex-charts mt-2" />
            </CardBody>
        </Card>
    );
};

export default TasksChart;
