import * as actionTypes from '../actions/actionTypes';

const initialState = {
    currentWord: [],
    currentWordLetterCount: 0,
    wrongGuessCount: 0,
    correctGuessCount: 0,
    maxWrongGuessCount:6,
    gameOver: false,
    completed: false,
    username: ''
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_NEW_WORD:            
        console.log('fetching word');
            const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
            let letterCount = 0;
            let currentWordObj = action.payload.split(' ').map((word, i) => {
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

            return {
                ...state,
                currentWord : currentWordObj,
                currentWordLetterCount: letterCount,
                wrongGuessCount: 0,
                correctGuessCount: 0,
                gameOver: false,
                completed: false  
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
            console.log(state.currentWordLetterCount, guessedLetterCount);
            if(state.currentWordLetterCount === guessedLetterCount){
                console.log('COMPLETED')
                isGameCompleted = true;
            }

            return {...state,
                currentWord:  mappedWord,
                wrongGuessCount: errorCount,
                gameOver: isGameOver,
                correctGuessCount: guessedLetterCount,
                completed: isGameCompleted
            };
        case actionTypes.SET_NEW_USERNAME:
            console.log('settings username', action.payload)
            return {
                ...state,
                username: action.payload
            }
            
            
        default:
            return state;
    }
} 

export default appReducer;