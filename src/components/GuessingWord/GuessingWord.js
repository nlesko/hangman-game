import React, {useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import CssClasses from './GuessingWord.module.scss';


const GuessingWord = () => {
    
    const currentWord = useSelector((state) => state.game.currentWord);    
    
    // useEffect(() => {

    // }, [currentWord])

    return(
        <div className={CssClasses.container}>
            {currentWord.length >  0&& currentWord?.map(word => {                
                return (
                    <span key={word.id} className={CssClasses['word']}>
                    {word.letters.length > 0 ?  word.letters.map(letter => {                        
                        return(
                            <span key={letter.id} className={[CssClasses['letter'], letter.isNew ? CssClasses['letter--new'] : ""].join(" ")}>
                                {letter.isGuessed ? letter.value : ""}
                            </span>
                        )
                        }): null                        
                    }
                    </span>
                )
            })}
        </div>
    )
}

export default GuessingWord;