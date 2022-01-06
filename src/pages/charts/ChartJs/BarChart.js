// @flow
import React from 'react';
import { Bar, defaults as ChartjsDefaults, Chart } from 'react-chartjs-2';
import { Card, CardBody } from 'reactstrap';

const BarChart = () => {
    // changing chartjs defaults
    ChartjsDefaults.global.defaultFontColor = '#8391a2';
    ChartjsDefaults.scale.gridLines.color = '#8391a2';
    ChartjsDefaults.global.defaultFontFamily =
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif';
    var draw3 = Chart.controllers.bar.prototype.draw;
    Chart.controllers.bar = Chart.controllers.bar.extend({
        draw: function() {
            draw3.apply(this, arguments);
            var ctx = this.chart.chart.ctx;
            var _fill = ctx.fill;
            ctx.fill = function() {
                ctx.save();
                ctx.shadowColor = 'rgba(0,0,0,0.01)';
                ctx.shadowBlur = 20;
                ctx.shadowOffsetX = 4;
                ctx.shadowOffsetY = 5;
                _fill.apply(this, arguments);
                ctx.restore();
            };
        },
    });

    const barChartData = canvas => {
        const ctx = canvas.getContext('2d');
        var gradientStroke = ctx.createLinearGradient(0, 500, 0, 150);
        gradientStroke.addColorStop(0, '#fa5c7c');
        gradientStroke.addColorStop(1, '#727cf5');

        return {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    label: 'Sales Analytics',
                    backgroundColor: gradientStroke,
                    borderColor: gradientStroke,
                    hoverBackgroundColor: gradientStroke,
                    hoverBorderColor: gradientStroke,
                    data: [65, 59, 80, 81, 56, 89, 40, 32, 65, 59, 80, 81],
                    barPercentage: 0.7,
                    categoryPercentage: 0.5,
                },
                {
                    label: 'Dollar Rate',
                    backgroundColor: '#e3eaef',
                    borderColor: '#e3eaef',
                    hoverBackgroundColor: '#e3eaef',
                    hoverBorderColor: '#e3eaef',
                    data: [89, 40, 32, 65, 59, 80, 81, 56, 89, 40, 65, 59],
                    barPercentage: 0.7,
                    categoryPercentage: 0.5,
                },
            ],
        };
    };

    // options
    const barChartOpts = {
        maintainAspectRatio: false,
        legend: {
            display: false,
        },
        tooltips: {
            backgroundColor: '#727cf5',
            titleFontColor: '#fff',
            bodyFontColor: '#fff',
            bodyFontSize: 14,
            displayColors: false,
        },
        scales: {
            yAxes: [
                {
                    gridLines: {
                        display: false,
                        color: 'rgba(0,0,0,0.05)',
                    },
                    stacked: false,
                    ticks: {
                        stepSize: 20,
                    },
                },
            ],
            xAxes: [
                {
                    stacked: false,
                    gridLines: {
                        color: 'rgba(0,0,0,0.05)',
                    },
                },
            ],
        },
    };

    return (
        <Card>
            <CardBody>
                <h4 className="header-title mb-3">Bar Chart</h4>

                <div style={{ height: '320px' }} className="chartjs-chart">
                    <Bar data={barChartData} options={barChartOpts} />
                </div>
            </CardBody>
        </Card>
    );
};

export default BarChart;
