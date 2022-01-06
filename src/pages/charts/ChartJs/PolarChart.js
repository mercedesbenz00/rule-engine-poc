// @flow
import React from 'react';
import { Polar } from 'react-chartjs-2';
import { Card, CardBody } from 'reactstrap';

const PolarChart = () => {
    const polarChartData = {
        datasets: [
            {
                data: [11, 16, 7, 3, 14],
                backgroundColor: ['#727cf5', '#fa5c7c', '#0acf97', '#ebeff2', '#39afd1'],
                label: 'My dataset', // for legend
            },
        ],
        labels: ['Purple', 'Red', 'Green', 'Grey', 'Cyan'],
    };

    const polarChartOpts = {
        maintainAspectRatio: false,
        legend: {
            display: true,
        },
    };

    return (
        <Card>
            <CardBody>
                <h4 className="header-title mb-3">Polar Chart</h4>

                <div className="mb-5 mt-4 chartjs-chart" style={{ height: '320px', maxWidth: '100%' }}>
                    <Polar data={polarChartData} options={polarChartOpts} />
                </div>
            </CardBody>
        </Card>
    );
};

export default PolarChart;
