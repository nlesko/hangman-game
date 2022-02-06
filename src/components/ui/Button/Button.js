import React from 'react';
import CssClasses from './Button.module.scss';

/**
 * Creates button element.
 *
 * @param {String} text sets text of a button
 * @param {boolean} isActive sets active class on input if active
 * @param {Object} onClickHanlder function for click evnet
 * @param {Object} style used if needed custom styling
 * @param {string} type gives button a type for specific styling example: 'error' or 'primary'
 * @param {Boolean?} inline makes button inline  
 *  
 *
 * @returns
 */

const Button = ({text, style, type, onClickHandler, ...props}) => {

    return (        
        <button className={[CssClasses.btn, type ? CssClasses[`btn--${type}`] : ""].join(" ")}
            onClick={() => onClickHandler()}
        >
            {text}
        </button>
    )
}

export default Button;