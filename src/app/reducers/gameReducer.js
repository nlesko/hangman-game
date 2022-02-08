import * as actionTypes from '../actions/actionTypes';

const initialState = {
    currentWord: [],
    wrongGuessCount: 0,
    maxWrongGuessCount:6,
    gameOver: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_NEW_WORD:            
            const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
            let currentWordObj = action.payload.split(' ').map((word, i) => {
                return {                                
                    id: i,
                    letters: word.split('').map((letter, iL) => {
                        
                        return {
                            isGuessed: specialChars.test(letter),
                            isNew: false,
                            value: letter,
                            id: iL
                        }
                    })
                }
            });
    

            return {
                ...state,
                currentWord : currentWordObj
            };
        case actionTypes.CHECK_WORD_LETTER:
            let hasError = true;
            let errorCount = state.wrongGuessCount;
            let mappedWord = state.currentWord.map(word => {
                
                return {
                    ...word,
                    letters: word.letters?.map(letter => {
                    if(letter.value.toLowerCase() === action.payload.toLowerCase()){
                        hasError = false;
                        return {
                            ...letter,
                            isGuessed: true,
                            isNew: true
                        }
                    }

                    if(letter.isNew){
                        return {
                            ...letter,
                            isNew: false
                        }
                    }
                    
                    
                    return letter;
                })
                }
            })

            if(hasError){
                errorCount = errorCount += 1;
            }

            let isGameOver= false;
            if(errorCount >= state.maxWrongGuessCount){
                isGameOver = true;
            }

            return {...state,
                currentWord:  mappedWord,
                wrongGuessCount: errorCount,
                gameOver: isGameOver
            }
        default:
            return state;
    }
} 

export default appReducer;