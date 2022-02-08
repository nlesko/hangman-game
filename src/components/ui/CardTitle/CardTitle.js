import React from 'react';
import CssClasses from './CardTitle.module.scss';
/**
 * Creates card title ui element.
 *
 * @param {String} tag sets the tag of component 
 *  
 *
 * @returns
 */

const CardTitle = (props) => {
    const Tag = props.tag ? props.tag : "h5";
    return (
        <Tag className={CssClasses.title}>
            {props.children}
        </Tag>
    )
}


export default CardTitle;