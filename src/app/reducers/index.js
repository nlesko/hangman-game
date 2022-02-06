import { combineReducers } from "@reduxjs/toolkit";

import appReducer from './appReducer';
import gameReducer from './gameReducer';

export default combineReducers({
    app: appReducer,
    game: gameReducer
})