// @flow
import React from 'react';
import { Chart, Doughnut } from 'react-chartjs-2';
import { Card, CardBody } from 'reactstrap';

const DonutChart = () => {
    // changing chartjs defaults
    var draw2 = Chart.controllers.doughnut.prototype.draw;
    Chart.controllers.doughnut = Chart.controllers.doughnut.extend({
        draw: function() {
            draw2.apply(this, arguments);
            var ctx = this.chart.chart.ctx;
            var _fill = ctx.fill;
            ctx.fill = function() {
                ctx.save();
                ctx.shadowColor = 'rgba(0,0,0,0.03)';
                ctx.shadowBlur = 4;
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 3;
                _fill.apply(this, arguments);
                ctx.restore();
            };
        },
    });

    const donutChartData = {
        labels: ['Direct', 'Affilliate', 'Sponsored', 'E-mail'],
        datasets: [
            {
                data: [300, 135, 48, 154],
                backgroundColor: ['#727cf5', '#fa5c7c', '#0acf97', '#ebeff2'],
                borderColor: 'transparent',
                borderWidth: '3',
            },
        ],
    };

    const donutChartOpts = {
        maintainAspectRatio: false,
        cutoutPercentage: 60,
        legend: {
            display: true,
        },
    };

    return (
        <Card>
            <CardBody>
                <h4 className="header-title mb-3">Donut Chart</h4>

                <div className="mb-5 mt-4 chartjs-chart" style={{ height: '320px', maxWidth: '320px' }}>
                    <Doughnut data={donutChartData} options={donutChartOpts} />
                </div>
            </CardBody>
        </Card>
    );
};

export default DonutChart;
