import * as actionTypes from '../actions/actionTypes';

const initialState = {
    currentWord: [],
    currentWordUniqueLetterCount: 0,
    currentWordLetterCount: 0,
    wrongGuessCount: 0,
    correctGuessCount: 0,
    maxWrongGuessCount:6,
    gameOver: false,
    completed: false,
    userName: '',
    isNewGame: true,
    hint: '',
    duration: 0
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_NEW_WORD:            
            const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
            let letterCount = 0;
            console.log('action payload', action.payload)
            let content = action.payload;
            let currentWordArr = [];
            let uniqueChars = 0;                
            
            if(content){
                 uniqueChars = [...new Set(content.toLowerCase())].length
                 currentWordArr = content.split(' ').map((word, i) => {
                    return {                                
                        id: i,
                        letters: word.split('').map((letter, iL) => {
                            if(!specialChars.test(letter)){
                                letterCount += 1;
                            }
                            return {
                                isGuessed: specialChars.test(letter),
                                isNew: false,
                                value: letter,
                                id: iL
                            }
                        })
                    }
                });
            }
            return {
                ...state,
                currentWord : currentWordArr,
                currentWordUniqueLetterCount: uniqueChars,
                currentWordLetterCount: letterCount,
                wrongGuessCount: 0,
                correctGuessCount: 0,
                gameOver: false,
                completed: false,
                isNewGame: true,
                hint: content
            };
        case actionTypes.CHECK_WORD_LETTER:
            let hasError = true;
            let errorCount = state.wrongGuessCount;
            let guessedLetterCount = state.correctGuessCount;
            let isGameCompleted = false;
            let mappedWord = state.currentWord.map(word => {
                return {
                    ...word,
                    letters: word.letters?.map(letter => {
                    if(letter.value.toLowerCase() === action.payload.toLowerCase()){
                        hasError = false;
                        guessedLetterCount += 1;
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
            
            if(state.currentWordLetterCount === guessedLetterCount){
                isGameCompleted = true;
            }

            return {...state,
                currentWord:  mappedWord,
                wrongGuessCount: errorCount,
                gameOver: isGameOver,
                correctGuessCount: guessedLetterCount,
                completed: isGameCompleted,
                isNewGame: false
            };
        case actionTypes.SET_NEW_USERNAME:            
            return {
                ...state,
                userName: action.payload
            }
        default:
            return state;
    }
} 

export default appReducer;