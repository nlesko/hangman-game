import React from 'react';
import PropTypes from 'prop-types';

/**
 * Creates card title ui element.
 *
 * @param {String} tag sets the tag of component 
 * @param {String?} className sets classname for component from parent component
 *
 * @returns
 */

const CardTitle = ({tag, children, ...rest}) => {
    const Tag = tag || 'h5';
    return (
        <Tag className="" {...rest}>
            {children}
        </Tag>
    )
}

CardTitle.propTypes = {
    tag: PropTypes.string,
    className: PropTypes.string
}

CardTitle.defaultProps = {
    tag: 'h5',
    className: ''
}

export default CardTitle;