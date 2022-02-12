import React, { useEffect, useState } from 'react';
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

const Input = ({label, defaultValue, value, ...props}) => {

    const [inputValue, setInputValue] = useState(defaultValue ? defaultValue : '');

    useEffect(() => {
        if(value){
            setInputValue(value);
        }        
    }, [value])

    const onValueChange = (e) => {
        setInputValue(e.target.value);
        props.onChangeHandler(e.target.value);
        console.log('text val', e.target.value);
    }

    return (
        <div className="container">
            {label &&
                <label className={CssClasses.label}>
                    {label}
                </label>
            }
            <input  
                type={props.type ? props.type : "text"}
                value={inputValue}
                onChange={onValueChange}
                className={CssClasses['form-control']}
            />
        </div>
    )
}


export default Input;