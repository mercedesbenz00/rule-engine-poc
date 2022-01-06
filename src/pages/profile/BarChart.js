// @flow
import React from 'react';
import Chart from 'react-apexcharts';
import { Card, CardBody } from 'reactstrap';

const BarChart = () => {
    const apexBarChartOpts = {
        chart: {
            height: 260,
            type: 'bar',
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '45%',
            },
        },
        dataLabels: {
            enabled: false,
        },
        colors: ['#727cf5', '#e3eaef'],
        stroke: {
            show: true,
            width: 1,
            colors: ['#fff'],
        },

        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            axisBorder: {
                show: true,
                color: '#f1f3fa',
            },
            axisTicks: {
                show: false,
            },
        },
        legend: {
            offsetY: -10,
        },
        states: {
            hover: {
                filter: 'none',
            },
        },
        grid: {
            borderColor: '#f1f3fa',
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
            },
        },
    };

    const apexBarChartData = [
        {
            name: 'Orders',
            data: [65, 59, 80, 81, 56, 89, 40, 32, 65, 59, 80, 81],
        },
        {
            name: 'Revenue',
            data: [89, 40, 32, 65, 59, 80, 81, 56, 89, 40, 65, 59],
        },
    ];

    return (
        <Card>
            <CardBody>
                <h4 className="header-title mb-3">Orders & Revenue</h4>
                <Chart
                    options={apexBarChartOpts}
                    series={apexBarChartData}
                    type="bar"
                    className="apex-charts"
                    height={260}
                />
            </CardBody>
        </Card>
    );
};

export default BarChart;
