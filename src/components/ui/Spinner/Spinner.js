import React from 'react';
import CssClasses from './Spinner.module.scss';

const Spinner = () => {
    return (
        <div className={CssClasses.spinner}>
            <div className={CssClasses.loading}>

            </div>
        </div>
    )
}

export default Spinner;