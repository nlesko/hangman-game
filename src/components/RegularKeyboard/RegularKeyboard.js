import React from 'react';
import { useDispatch } from 'react-redux';
import { checkWordLetter } from '../../app/actions/gameActions';
import CssClasses from './RegularKeyboard.module.scss';


let buttonInfo = {
    row1: [
        {
            id: 1,
            label: "a",
            value: "a",
            order: 1
        },
        {
            id: 2,
            label: "b",
            value: "b",
            order: 2
        },
        {
            id: 3,
            label: "c",
            value: "c",
            order: 3
        },
        {
            id: 4,
            label: "d",
            value: "d",
            order: 4
        },
        {
            id: 5,
            label: "e",
            value: "e",
            order: 5
        },
        {
            id: 6,
            label: "f",
            value: "f",
            order: 6
        },
        {
            id: 7,
            label: "g",
            value: "g",
            order: 7
        },
        {
            id: 8,
            label: "h",
            value: "h",
            order: 8
        },
        {
            id: 9,
            label: "i",
            value: "i",
            order: 9
        },
        {
            id: 10,
            label: "j",
            value: "j",
            order: 10
        },
        {
            id: 11,
            label: "k",
            value: "k",
            order: 10
        },
        {
            id: 12,
            label: "l",
            value: "l",
            order: 10
        },
        {
            id: 13,
            label: "m",
            value: "m",
            order: 10
        }
    ],
    row2: [
        {
            id: 1,
            label: "n",
            value: "n",
            order: 1
        },
        {
            id: 2,
            label: "o",
            value: "o",
            order: 2
        },
        {
            id: 3,
            label: "p",
            value: "p",
            order: 3
        },
        {
            id: 4,
            label: "q",
            value: "q",
            order: 4
        },
        {
            id: 5,
            label: "r",
            value: "r",
            order: 5
        },
        {
            id: 6,
            label: "s",
            value: "s",
            order: 6
        },
        {
            id: 7,
            label: "t",
            value: "t",
            order: 7
        },
        {
            id: 8,
            label: "u",
            value: "u",
            order: 8
        },
        {
            id: 9,
            label: "v",
            value: "v",
            order: 9
        },
        {
            id: 10,
            label: "w",
            value: "w",
            order: 10
        },
        {
            id: 11,
            label: "x",
            value: "x",
            order: 10
        },
        {
            id: 12,
            label: "y",
            value: "y",
            order: 10
        },
        {
            id: 13,
            label: "z",
            value: "z",
            order: 10
        }
    ],
    
};



const RegularKeyboard = () => {    

    const dispatch = useDispatch();

    const onButtonClick = (value) => {
        dispatch(checkWordLetter(value))
    }
    return (
        <div className={CssClasses.container}>
            <div className={"row"}>
                {buttonInfo.row1.map(btn => {
                    return (
                        <button
                            key={btn.id}
                            className={CssClasses.btn}
                          onClick={() => onButtonClick(btn.value)}
                        >
                            {btn.label}
                        </button>
                    );
                })}
            </div>


            <div className="row">
            {buttonInfo.row2.map(btn => {
                return (
                    <button
                        key={btn.id}
                        className={CssClasses.btn}
                        onClick={() => onButtonClick(btn.value)}
                    >
                        {btn.label}
                    </button>
                );
            })}
            </div>
            
            
            
        </div>
    )
}

export default RegularKeyboard;