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