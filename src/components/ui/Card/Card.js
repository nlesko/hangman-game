import React from 'react';
import CssClasses from './Card.module.scss';

const Card = (props) => {
    return(
        <div className={CssClasses.card}>
            {props.children}
        </div>
    )
}

export default Card;