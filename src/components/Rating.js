import React from 'react';
import classNames from 'classnames';
import { UncontrolledTooltip } from 'reactstrap';

type RatingProps = {
    tag?: string,
    className?: string,
    value?: number,
};

/**
 * Rating
 */
const Rating = (props: RatingProps) => {
    const rating = Math.floor(props.value || 0);
    const emptyStars = Math.floor(rating < 5 ? 5 - rating : 0);
    const Tag = props.tag;

    return (
        <React.Fragment>
            <Tag className={classNames('font-16', props.className)} {...props} id="rating-container">
                {[...Array(rating)].map((x, i) => (
                    <span key={i} className="text-warning mdi mdi-star"></span>
                ))}
                {[...Array(emptyStars)].map((x, i) => (
                    <span key={i} className="text-warning mdi mdi-star-outline"></span>
                ))}
            </Tag>
            <UncontrolledTooltip placement="right" target="rating-container">
                {props.value || 0}
            </UncontrolledTooltip>
        </React.Fragment>
    );
};

Rating.defaultProps = {
    tag: 'p',
};

export default Rating;
