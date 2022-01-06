// @flow
import React from 'react';
import { Card, CardBody } from 'reactstrap';
import PropTypes from 'prop-types';
import classNames from 'classnames';

type StatisticsWidgetProps = {
    textClass?: string,
    bgclassName?: string,
    icon?: string,
    title: string,
    description: string,
    stats?: string,
    trend: PropTypes.object,
};

/**
 * Statistics widget
 */
const StatisticsWidget = (props: StatisticsWidgetProps) => {
    const textClass = props.textClass || 'text-muted';
    return (
        <Card className={classNames('widget-flat', props.bgclassName)}>
            <CardBody>
                {props.icon && (
                    <div className="float-right">
                        <i className={classNames(props.icon, 'widget-icon')}></i>
                    </div>
                )}
                <h5 className={classNames('font-weight-normal', 'mt-0', textClass)} title={props.description}>
                    {props.title}
                </h5>
                <h3 className={classNames('mt-3', 'mb-3', textClass)}>{props.stats}</h3>

                {props.trend && (
                    <p className={classNames('mb-0', textClass)}>
                        <span className={classNames(props.trend.textClass, 'mr-2')}>
                            <i className={classNames(props.trend.icon)}></i> {props.trend.value}
                        </span>
                        <span className="text-nowrap">{props.trend.time}</span>
                    </p>
                )}
            </CardBody>
        </Card>
    );
};

export default StatisticsWidget;
