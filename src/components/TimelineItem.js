import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

type TimelineProps = {
    tag?: string,
    className?: string,
    children?: PropTypes.object,
};

/**
 * TimelineItem
 */
const TimelineItem = (props: TimelineProps) => {
    const children = props.children || null;
    const Tag = props.tag;

    return (
        <Tag className={classNames('timeline-item', props.className)} {...props}>
            {children}
        </Tag>
    );
};

TimelineItem.defaultProps = {
    tag: 'div',
};

export default TimelineItem;
