import React, { useEffect, useState } from 'react';
import CssClasses from './Input.module.scss';


const Input = ({label, defaultValue, value, ...props}) => {

    const [inputValue, setInputValue] = useState(defaultValue ? defaultValue : '');

    useEffect(() => {
        setInputValue(value)
    }, [value])

    const onValueChange = (e) => {
        setInputValue(e.target.value);
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
                type="text"
                value={inputValue}
                onChange={onValueChange}
            />
        </div>
    )
}


export default Input;