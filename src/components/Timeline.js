import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

type TimelineProps = {
    tag?: string,
    className?: string,
    children?: PropTypes.object,
};

/**
 * Timeline
 */
const Timeline = (props: TimelineProps) => {
    const children = props.children || null;
    const Tag = props.tag;

    return (
        <Tag className={classNames('timeline-alt', 'pb-0', props.className)} {...props}>
            {children}
        </Tag>
    );
};

Timeline.defaultProps = {
    tag: 'div',
};

export default Timeline;
