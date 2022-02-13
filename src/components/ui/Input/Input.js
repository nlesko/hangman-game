import React from 'react';
import CssClasses from './Input.module.scss';


/**
 * Creates input element.
 *
 * @param {String} defaultValue sets default value of a input field
 * @param {String} type sets type of input, default is text
 * @param {Function} onChangeHandle handles chane event
 *  
 *
 * @returns
 */

const Input = ({type, className, ...props}) => {

    return (
        
            
            <input  
                type={type ? type : "text"}
                className={[CssClasses['form-control'], className].join(" ")}
                {...props}
            />
        
    )
}


export default Input;