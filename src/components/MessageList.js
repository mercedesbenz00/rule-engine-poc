import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

type MessageListProps = {
    tag?: string,
    className?: string,
    children?: PropTypes.object,
};

/**
 * MessageList
 */
const MessageList = (props: MessageListProps) => {
    const children = props.children || null;
    const Tag = props.tag;

    return (
        <Tag className={classNames('inbox-widget', props.className)} {...props}>
            {children}
        </Tag>
    );
};

MessageList.defaultProps = {
    tag: 'div',
};

export default MessageList;
