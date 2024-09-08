import React from 'react';
import { useSelector } from 'react-redux';

const GuessingWord = () => {
    
    const currentWord = useSelector((state) => state.game.currentWord);    

    return(
        <div className="flex flex-row gap-8 justify-center my-5">
            {currentWord.length >  0 && currentWord?.map(word => {                
                return (
                    <div key={word.id} className="flex gap-2">
                    {word.letters.length > 0 ?  word.letters.map(letter => {                        
                        return(
                            <div
                                key={letter.id}
                                className={`w-12 h-12 flex items-center justify-center border-2 border-cyan-600 rounded-md text-2xl font-semibold text-white bg-cyan-700 transition duration-1000 ease-out ${letter.isGuessed ? '' : 'opacity-20'}`}
                                >
                                {letter.isGuessed ? letter.value : ''}
                            </div>
                        )
                        }): null                        
                    }
                    </div>
                )
            })}
        </div>
    )
}

export default GuessingWord;