import React from 'react';
import PropTypes from 'prop-types';

/**
 * Creates button element.
 * 
 * @param {boolean} isActive sets active class on input if active
 * @param {Function} onClickHanlder function for click evnet
 * @param {object} style used if needed custom styling
 * @param {string} type gives button a type for specific styling example: 'error' or 'primary'
 * @param {string} className sets class for a button from parent component 
 * @param {string} tag sets tag of a button
 *  
 *
 * @returns
 */

const Button = ({style, type, tag, className, ...props}) => {
    const Tag = tag;
    return (        
        <Tag className="px-6 py-3 bg-sky-500 text-white rounded-lg text-2xl font-semibold hover:bg-sky-600 transition-colors duration-500"
            {...props}
        >
            {props.children}
        </Tag>
    )
}

Button.propTypes = {        
    className: PropTypes.string,
    style: PropTypes.shape({}),
    type: PropTypes.string,
    tag: PropTypes.string
}

Button.defaultProps = {    
    className: '',
    type: 'primary',
    tag: 'button'    
}

export default Button;