import agent from '../api/agent';
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

// export const fetchHighscore = () => async dispatch => {
//     const { data } = await 
// }

export const fetchHighscores = () => async dispatch => {
    const data = await agent.jsonServer.highscores.list();
    console.log('fech called')
    dispatch({
        type: actionTypes.FETCH_HIGHSCORES,
        payload: data
    })
}


function fetchWord() {
    return new Promise((resolve) =>
        setTimeout(() => resolve({ data: 'This is, example!' }), 500)
    );
}