import { combineReducers } from 'redux';

import gameReducer from './game';
import displayOptionsReducer from './displayOptions';

const rootReducer = combineReducers({
    game: gameReducer,
    displayOptions: displayOptionsReducer, 
});

export default rootReducer;