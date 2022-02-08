import React from 'react';
import CssClasses from './CardBody.module.scss';

/**
 * Creates  card body ui element.
 *
 * @param {boolean?} column set card body to column by default it is row 
 *   
 *
 * @returns
 */

const CardBody = (props) => {
    
    return (
        <div className={[CssClasses.container, props.column ? CssClasses['direction--column'] : ""].join(" ")}>
            {props.children}
        </div>
    )
}

export default CardBody;