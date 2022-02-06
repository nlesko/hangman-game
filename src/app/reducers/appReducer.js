import { AppViews } from '../../constants';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    currentView: AppViews.gameMenu
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_APP_VIEW:
            return {
                ...state,
                currentView : action.payload
            };
        default:
            return state;
    }
} 

export default appReducer;