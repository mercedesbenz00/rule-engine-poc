// @flow
import React from 'react';
import { Chart, Line } from 'react-chartjs-2';
import { Card, CardBody } from 'reactstrap';

const LineChart = () => {
    // changing chartjs defaults
    var draw = Chart.controllers.line.prototype.draw;
    Chart.controllers.line.prototype.draw = function() {
        draw.apply(this, arguments);
        var ctx = this.chart.chart.ctx;
        var _stroke = ctx.stroke;
        ctx.stroke = function() {
            ctx.save();
            ctx.shadowColor = 'rgba(0,0,0,0.01)';
            ctx.shadowBlur = 20;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 5;
            _stroke.apply(this, arguments);
            ctx.restore();
        };
    };

    const lineChartData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Current Week',
                backgroundColor: 'rgba(114, 124, 245, 0.3)',
                borderColor: '#727cf5',
                data: [32, 42, 42, 62, 52, 75, 62],
            },
            {
                label: 'Previous Week',
                fill: true,
                backgroundColor: 'transparent',
                borderColor: '#0acf97',
                borderDash: [5, 5],
                data: [42, 58, 66, 93, 82, 105, 92],
            },
        ],
    };

    const lineChartOpts = {
        maintainAspectRatio: false,
        legend: {
            display: false,
        },
        tooltips: {
            intersect: false,
        },
        hover: {
            intersect: true,
        },
        plugins: {
            filler: {
                propagate: false,
            },
        },
        scales: {
            xAxes: [
                {
                    reverse: true,
                    gridLines: {
                        color: 'rgba(0,0,0,0.05)',
                    },
                },
            ],
            yAxes: [
                {
                    ticks: {
                        stepSize: 20,
                    },
                    display: true,
                    borderDash: [5, 5],
                    gridLines: {
                        color: 'rgba(0,0,0,0)',
                        fontColor: '#fff',
                    },
                },
            ],
        },
    };

    return (
        <Card>
            <CardBody>
                <h4 className="header-title mb-3">Line Chart</h4>
                <div style={{ height: '320px' }} className="mt-3 chartjs-chart">
                    <Line data={lineChartData} options={lineChartOpts} />
                </div>
            </CardBody>
        </Card>
    );
};

export default LineChart;
