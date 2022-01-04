import { combineReducers } from 'redux';

import userReducer from './user';
import gameReducer from './game';
import displayOptionsReducer from './displayOptions';

const rootReducer = combineReducers({
    user: userReducer,
    game: gameReducer,
    displayOptions: displayOptionsReducer, 
});

export default rootReducer;