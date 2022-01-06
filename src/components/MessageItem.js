import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

type MessageItemProps = {
    tag?: string,
    className?: string,
    children?: PropTypes.object,
};

/**
 * MessageItem
 */
const MessageItem = (props: MessageItemProps) => {
    const children = props.children || null;
    const Tag = props.tag;

    return (
        <Tag className={classNames('inbox-item', props.className)} {...props}>
            {children}
        </Tag>
    );
};

MessageItem.defaultProps = {
    tag: 'div',
};

export default MessageItem;
