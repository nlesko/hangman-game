import React from 'react';
import PropTypes  from 'prop-types';

/**
 * Creates card ui element.
 *
 * @param {String?} className sets classname for card component from parent component
 * @param {Boolean?} row sets card to display as row
 *  
 *
 * @returns
 */

const Card = ({ row, children, ...rest}) => {
    const classes = ['card'];

    if(row){
        classes.push('flex-row')
    }

    return(
        <div className={classes.join(' ')} {...rest}>
            {children}
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