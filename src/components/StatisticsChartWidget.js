// @flow
import React from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import Chart from 'react-apexcharts';
import PropTypes from 'prop-types';
import classNames from 'classnames';

type StatisticsChartWidgetProps = {
    colors?: Array<string>,
    type?: string,
    name?: string,
    data?: Array<number>,
    textClass?: string,
    bgClass?: string,
    description?: string,
    title?: string,
    stats?: string,
    trend: PropTypes.object,
};

const StatisticsChartWidget = (props: StatisticsChartWidgetProps) => {
    const options = {
        chart: {
            sparkline: {
                enabled: true,
            },
        },
        plotOptions: {
            bar: {
                columnWidth: '60%',
            },
        },
        xaxis: {
            crosshairs: {
                width: 1,
            },
        },
        stroke: {
            width: 2,
            curve: 'smooth',
        },
        yaxis: {
            min: 0,
        },
        colors: props.colors || ['#008FFB'],
    };
    const type = props.type || 'bar';

    const series = [{ name: props.name || 'Data', data: props.data || [] }];

    const textClass = props.textClass || 'text-muted';

    return (
        <Card className={classNames('widget-flat', props.bgClass)}>
            <CardBody>
                <Row className="align-items-center">
                    <Col className="col-6">
                        <h5
                            className={classNames('font-weight-normal', 'mt-0', 'text-truncate', textClass)}
                            title={props.description}>
                            {props.title}
                        </h5>
                        <h3 className="my-2 py-1">{props.stats}</h3>

                        {props.trend && (
                            <p className={`mb-0 ${textClass}`}>
                                <span className={classNames(props.trend.textClass, 'mr-2')}>
                                    <i className={`${props.trend.icon}`}></i> {props.trend.value}
                                </span>
                            </p>
                        )}
                    </Col>

                    <Col className="col-6">
                        <Chart className="apex-charts" options={options} series={series} type={type} height={60} />
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
};

export default StatisticsChartWidget;
