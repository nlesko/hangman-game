import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkWordLetter } from '../../app/actions/gameActions';

let buttonInfo = [
        {
            id: 1,
            label: "a",
            value: "a",
            order: 1,
            isUsed: false
        },
        {
            id: 2,
            label: "b",
            value: "b",
            order: 2,
            isUsed: false

        },
        {
            id: 3,
            label: "c",
            value: "c",
            order: 3,
            isUsed: false
        },
        {
            id: 4,
            label: "d",
            value: "d",
            order: 4,
            isUsed: false
        },
        {
            id: 5,
            label: "e",
            value: "e",
            order: 5,
            isUsed: false
        },
        {
            id: 6,
            label: "f",
            value: "f",
            order: 6,
            isUsed: false
        },
        {
            id: 7,
            label: "g",
            value: "g",
            order: 7,
            isUsed: false
        },
        {
            id: 8,
            label: "h",
            value: "h",
            order: 8,
            isUsed: false
        },
        {
            id: 9,
            label: "i",
            value: "i",
            order: 9,
            isUsed: false
        },
        {
            id: 10,
            label: "j",
            value: "j",
            order: 10,
            isUsed: false
        },
        {
            id: 11,
            label: "k",
            value: "k",
            order: 10,
            isUsed: false
        },
        {
            id: 12,
            label: "l",
            value: "l",
            order: 10,
            isUsed: false
        },
        {
            id: 13,
            label: "m",
            value: "m",
            order: 10,
            isUsed: false
        },
    
        {
            id: 14,
            label: "n",
            value: "n",
            order: 1,
            isUsed: false
        },
        {
            id: 15,
            label: "o",
            value: "o",
            order: 2,
            isUsed: false
        },
        {
            id: 16,
            label: "p",
            value: "p",
            order: 3,
            isUsed: false
        },
        {
            id: 17,
            label: "q",
            value: "q",
            order: 4,
            isUsed: false
        },
        {
            id: 18,
            label: "r",
            value: "r",
            order: 5,
            isUsed: false
        },
        {
            id: 19,
            label: "s",
            value: "s",
            order: 6,
            isUsed: false
        },
        {
            id: 20,
            label: "t",
            value: "t",
            order: 7,
            isUsed: false
        },
        {
            id: 21,
            label: "u",
            value: "u",
            order: 8,
            isUsed: false
        },
        {
            id: 22,
            label: "v",
            value: "v",
            order: 9,
            isUsed: false
        },
        {
            id: 23,
            label: "w",
            value: "w",
            order: 10,
            isUsed: false
        },
        {
            id: 24,
            label: "x",
            value: "x",
            order: 10,
            isUsed: false
        },
        {
            id: 25,
            label: "y",
            value: "y",
            order: 10,
            isUsed: false
        },
        {
            id: 26,
            label: "z",
            value: "z",
            order: 10,
            isUsed: false
        }
    ];

const RegularKeyboard = () => {    

    let [buttons, setButtons] = useState(buttonInfo);
    const gameOver = useSelector((state) => state.game.gameOver);    
    const completed = useSelector((state) => state.game.completed);    
    const isNewGame = useSelector((state) => state.game.isNewGame);
    const dispatch = useDispatch();

    useEffect(() => {
        if(isNewGame){
            setButtons(buttonInfo);
        }
    }, [isNewGame])

    const onButtonClick = (btn) => {
        if(!gameOver && !completed){
            if(!btn.isUsed){
                dispatch(checkWordLetter(btn.value))
                
                setButtons(buttons.map(button => {
                    if(button.id === btn.id){
                        return {
                            ...button,
                            isUsed: true
                        }
                    }
                    return {...button};
                }))
            }
        }        
    }
    const btnUsedClasses = 'border-sky-100 bg-sky-200 text-gray-500 cursor-not-allowed';
    return (
        <div className="mx-5 my-8">
            <div className="flex gap-2">
                {buttons.map(btn => {
                    return (
                        <button
                            key={btn.id}
                            className={[
                                "w-12 h-12 flex items-center justify-center border-2 rounded-md text-2xl font-semibold transition duration-1000 ease-out",
                                btn.isUsed || completed ? btnUsedClasses : "border-sky-400 text-white bg-sky-500  hover:bg-sky-600"
                            ].join(" ")}
                          onClick={() => onButtonClick(btn)}
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