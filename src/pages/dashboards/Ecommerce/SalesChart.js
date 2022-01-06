// @flow
import React from 'react';
import Chart from 'react-apexcharts';
import { Card, CardBody, UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const SalesChart = () => {
    const apexDonutOpts = {
        chart: {
            height: 340,
            type: 'donut',
        },
        colors: ['#727cf5', '#0acf97', '#fa5c7c', '#ffbc00'],
        legend: {
            show: false,
        },
        responsive: [
            {
                breakpoint: 376,
                options: {
                    chart: {
                        width: 250,
                        height: 250,
                    },
                    legend: {
                        position: 'bottom',
                    },
                },
            },
        ],
    };

    const apexDonutData = [44, 55, 41, 17];

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

                <h4 className="header-title mb-3">Total Sales</h4>

                <Chart
                    options={apexDonutOpts}
                    series={apexDonutData}
                    type="donut"
                    height={360}
                    className="apex-charts mb-4 mt-4"
                />

                <div className="chart-widget-list">
                    <p>
                        <i className="mdi mdi-square text-primary"></i> Direct
                        <span className="float-right">$300.56</span>
                    </p>
                    <p>
                        <i className="mdi mdi-square text-danger"></i> Affilliate
                        <span className="float-right">$135.18</span>
                    </p>
                    <p>
                        <i className="mdi mdi-square text-success"></i> Sponsored
                        <span className="float-right">$48.96</span>
                    </p>
                    <p className="mb-0">
                        <i className="mdi mdi-square text-warning"></i> E-mail
                        <span className="float-right">$154.02</span>
                    </p>
                </div>
            </CardBody>
        </Card>
    );
};

export default SalesChart;
