import * as actionTypes from './actionTypes';

export const setAppView = (screenType) => {
    return {
        type: actionTypes.SET_APP_VIEW,
        payload: screenType
    }
}