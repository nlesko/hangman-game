import React from 'react';
import CssClasses from './CardTitle.module.scss';
import PropTypes from 'prop-types';

/**
 * Creates card title ui element.
 *
 * @param {String} tag sets the tag of component 
 * @param {String?} className sets classname for component from parent component
 *
 * @returns
 */

const CardTitle = (props) => {
    const Tag = props.tag;
    return (
        <Tag className={[CssClasses.title, props.className].join(" ")}>
            {props.children}
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