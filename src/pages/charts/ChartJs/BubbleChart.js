// @flow
import React from 'react';
import { Bubble } from 'react-chartjs-2';
import { Card, CardBody } from 'reactstrap';

const BubbleChart = () => {
    const bubbleData = {
        labels: ['January'],
        datasets: [
            {
                label: 'My First dataset',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(114, 124, 245, 0.4)',
                borderColor: 'rgba(114, 124, 245, 1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(114, 124, 245, 1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(114, 124, 245, 1)',
                pointHoverBorderColor: 'rgba(114, 124, 245, 1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [
                    { x: -43.219521604938265, y: 68.05984224965707, v: 909.6922153635117 },
                    { x: -85.34593621399178, y: 0.27756344307269387, v: 137.7914951989026 },
                    { x: 52.50450102880657, y: -102.80564128943759, v: 30.242626886145406 },
                    { x: -25.501543209876544, y: -137.02310528120714, v: 3.712277091906721 },
                    { x: 34.80259773662553, y: 1.7918381344307193, v: 474.86711248285326 },
                    { x: 87.58359053497944, y: -82.19414437585733, v: 860.3737997256516 },
                    { x: -12.991898148148152, y: -34.81438614540467, v: 576.8990054869685 },
                    { x: 87.24279835390945, y: -1.9022205075445697, v: 41.10939643347051 },
                    { x: -7.545653292181072, y: -129.29098079561044, v: 669.6716392318244 },
                    { x: 56.80941358024691, y: -62.81400034293553, v: 879.2524005486968 },
                    { x: -115.52533436213992, y: 51.69538751714677, v: 86.51834705075446 },
                    { x: 79.6167695473251, y: 68.40384945130313, v: 708.1361454046639 },
                    { x: -3.597608024691368, y: 91.47805212620028, v: 160.7724622770919 },
                    { x: -11.001800411522623, y: -24.91533779149519, v: 861.0939643347051 },
                    { x: -88.42914094650206, y: 73.39034636488338, v: 225.7673182441701 },
                    { x: -131.71296296296296, y: -9.438228737997235, v: 671.4591906721537 },
                ],
            },
        ],
    };

    const colorize = (opaque, context) => {
        var value = context.dataset.data[context.dataIndex];
        var x = value.x / 100;
        var y = value.y / 100;
        var r = x < 0 && y < 0 ? 250 : x < 0 ? 150 : y < 0 ? 50 : 0;
        var g = x < 0 && y < 0 ? 0 : x < 0 ? 50 : y < 0 ? 150 : 250;
        var b = x < 0 && y < 0 ? 0 : x > 0 && y > 0 ? 250 : 150;
        var a = opaque ? 1 : (0.5 * value.v) / 1000;

        return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
    };

    const bubbleChartOpts = {
        maintainAspectRatio: false,
        aspectRatio: 1,
        tooltips: false,
        elements: {
            point: {
                backgroundColor: colorize.bind(null, false),
                borderColor: colorize.bind(null, true),
                borderWidth: function(context) {
                    return Math.min(Math.max(1, context.datasetIndex + 1), 8);
                },
                radius: function(context) {
                    var value = context.dataset.data[context.dataIndex];
                    var size = context.chart.width;
                    var base = Math.abs(value.v) / 1000;
                    return (size / 24) * base;
                },
            },
        },
    };

    return (
        <Card>
            <CardBody>
                <h4 className="header-title mb-3">Bubble Chart</h4>

                <div className="mb-5 mt-4 chartjs-chart" style={{ height: '320px', maxWidth: '100%' }}>
                    <Bubble data={bubbleData} options={bubbleChartOpts} />
                </div>
            </CardBody>
        </Card>
    );
};

export default BubbleChart;
