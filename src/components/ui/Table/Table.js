import React from 'react';
import CssClasses from './Table.module.scss';

const Table = (props) =>{
    return (
        <div className={CssClasses.table}>
            {props.children}
        </div>
    )
}


export default Table;