import React from 'react';
import CssClasses from './CardHeader.module.scss';
/**
 * Creates card ui element.
 *
 * @param {String} tag sets the tag of component 
 *  
 *
 * @returns
 */

const CardHeader = () => {
    return (
        <>
        {
            <tag className={CssClasses.CardHeader}>

            </tag>
        }
            
        </>
    )
}


export default CardHeader;