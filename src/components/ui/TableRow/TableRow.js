import React from 'react';
import CssClasses from './TableRow.module.scss';

const TableRow = (props) =>{
    return (
        <div className={CssClasses.row}>
            {props.children}
        </div>
    )
}


export default TableRow;