// @flow
import React from 'react';
import { defaults as ChartjsDefaults, Chart, Line } from 'react-chartjs-2';
import { Card, CardBody } from 'reactstrap';

const ProgressChart = () => {
    // changing chartjs defaults
    ChartjsDefaults.global.defaultFontColor = '#8391a2';
    ChartjsDefaults.scale.gridLines.color = '#8391a2';
    ChartjsDefaults.global.defaultFontFamily =
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif';
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

    const chartData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Completed Tasks',
                backgroundColor: 'rgba(10, 207, 151, 0.3)',
                borderColor: '#0acf97',
                data: [32, 42, 42, 62, 52, 75, 62],
            },
            {
                label: 'Plan Tasks',
                fill: true,
                backgroundColor: 'transparent',
                borderColor: '#727cf5',
                borderDash: [5, 5],
                data: [42, 58, 66, 93, 82, 105, 92],
            },
        ],
    };

    const chartOpts = {
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
                <h5 className="card-title mb-3">Progress</h5>
                <div className="mt-3 chartjs-chart" style={{ height: '320px' }}>
                    <Line data={chartData} options={chartOpts} />
                </div>
            </CardBody>
        </Card>
    );
};

export default ProgressChart;
