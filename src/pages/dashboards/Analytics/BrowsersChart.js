// @flow
import React from 'react';
import Chart from 'react-apexcharts';
import { Card, CardBody, UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const BrowsersChart = () => {
    const apexOpts = {
        grid: {
            padding: {
                left: 0,
                right: 0,
            },
        },
        chart: {
            height: 343,
            type: 'radar',
            parentHeightOffset: 0,
            toolbar: {
                show: false,
            },
        },
        labels: ['Chrome', 'Firefox', 'Safari', 'Opera', 'Edge', 'Explorer'],
        plotOptions: {
            radar: {
                size: 130,
                polygons: {
                    strokeColor: '#e9e9e9',
                    fill: {
                        colors: ['#f8f8f8', '#fff'],
                    },
                },
            },
        },
        colors: ['#727cf5'],
        yaxis: {
            labels: {
                formatter: function(val) {
                    return val + '%';
                },
            },
        },
        dataLabels: {
            enabled: true,
        },
        markers: {
            size: 4,
            colors: ['#fff'],
            strokeColor: ['#727cf5'],
            strokeWidth: 2,
        },
    };

    const apexData = [
        {
            name: 'Usage',
            data: [80, 50, 30, 40, 60, 20],
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

                <h4 className="header-title mb-3">Sessions by Browser</h4>

                <Chart options={apexOpts} series={apexData} type="radar" height={352} className="apex-charts mt-3" />
            </CardBody>
        </Card>
    );
};

export default BrowsersChart;
