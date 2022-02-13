import React from 'react';
import PropTypes  from 'prop-types';
import CssClasses from './Card.module.scss';

/**
 * Creates card ui element.
 *
 * @param {String?} className sets classname for card component from parent component
 * @param {Boolean?} row sets card to display as row
 *  
 *
 * @returns
 */

const Card = (props) => {
    return(
        <div className={[CssClasses.card, props.row ? CssClasses['card--row']: "", props.className].join(" ")}>
            {props.children}
        </div>
    )
}

Card.propTypes = {
    row: PropTypes.bool,
    className : PropTypes.string
}

Card.defaultProps = {
    row: false,
    className: ''
}

export default Card;