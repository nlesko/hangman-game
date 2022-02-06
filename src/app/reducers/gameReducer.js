import * as actionTypes from '../actions/actionTypes';

const initialState = {
    currentWord: []
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
            console.log('check word', state.currentWord)
            let mappedWord = state.currentWord.map(word => {
                console.log('word', word);
                return {
                    ...word,
                    letters: word.letters?.map(letter => {
                    if(letter.value.toLowerCase() === action.payload.toLowerCase()){
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

            console.log('mappedWord', mappedWord);
            return {...state,
                currentWord:  mappedWord
            }
        default:
            return state;
    }
} 

export default appReducer;