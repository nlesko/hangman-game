import React from 'react';
import CssClasses from './TableHeader.module.scss';

const TableHeader = (props) =>{
    return (
        <div className={CssClasses['table-header']}>
            {props.children}
        </div>
    )
}


export default TableHeader;