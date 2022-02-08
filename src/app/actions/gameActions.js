import * as actionTypes from './actionTypes';

export const fetchNewWord = () => async dispatch => {
    const response = await fetchWord();

    dispatch({
        type: actionTypes.FETCH_NEW_WORD,
        payload: response.data
    })
}

export const checkWordLetter = (value) => {
    return {
        type: actionTypes.CHECK_WORD_LETTER,
        payload: value
    }
}

export const setNewUsername = (username) => {
    return {
        type: actionTypes.SET_NEW_USERNAME,
        payload: username
    };
}


function fetchWord() {
    return new Promise((resolve) =>
        setTimeout(() => resolve({ data: 'This is, example!' }), 500)
    );
}