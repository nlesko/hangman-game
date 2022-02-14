// import { uuidv4 } from '../../shared/helpers';
import agent from '../api/agent';
import * as actionTypes from './actionTypes';

export const fetchNewWord = () => async dispatch => {
    const data = await agent.quotable.random()
    dispatch({
        type: actionTypes.FETCH_NEW_WORD,
        payload: data
    })
}

export const checkWordLetter = (value) => {
    return {
        type: actionTypes.CHECK_WORD_LETTER,
        payload: value
    }
}

export const setNewUserName = (userName) => {
    return {
        type: actionTypes.SET_NEW_USERNAME,
        payload: userName
    };
}

// export const fetchHighscore = () => async dispatch => {
//     const { data } = await 
// }

export const fetchHighscores = () => async dispatch => {
    const data = await agent.jsonServer.highscores.list();    
    dispatch({
        type: actionTypes.FETCH_HIGHSCORES,
        payload: data
    })
}

export const submitHighscore = (result) => async dispatch => {
    const data = await agent.jsonServer.highscores.submit(result)    
    dispatch({
        type: actionTypes.SUBMIT_HIGHSCORE,
        payload: data
    })
}

// used for testing
// function fetchWord() {
//     return new Promise((resolve) =>
//         setTimeout(() => resolve(
//             { data: {
//                 _id: uuidv4,
//                 content: 'This is, example!',
//                 length: 'This is, example!'.length,
//             }}
//         ), 2000)
//     );
// }