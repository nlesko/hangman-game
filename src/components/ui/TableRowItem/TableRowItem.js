import React from 'react';
import CssClasses from './TableRowItem.module.scss';

const TableRowItem = (props) =>{
    return (
        <div className={[CssClasses['row-item'], props.className].join(" ")}>
            {props.children}
        </div>
    )
}


export default TableRowItem;