import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

type SpinnerProps = {
    tag?: string,
    className?: string,
    size?: 'lg' | 'md' | 'sm' | null,
    type: 'bordered' | 'grow',
    color: string,
    children?: PropTypes.object,
};

/**
 * Spinner
 */
const Spinner = (props: SpinnerProps) => {
    const children = props.children || null;
    const Tag = props.tag;

    return (
        <Tag
            role="status"
            className={classNames(
                { 'spinner-border': props.type === 'bordered', 'spinner-grow': props.type === 'grow' },
                [`text-${props.color}`],
                { [`avatar-${props.size}`]: props.size },
                props.className
            )}>
            {children}
        </Tag>
    );
};

Spinner.defaultProps = {
    tag: 'div',
    type: 'bordered',
    color: 'primary',
};

export default Spinner;
