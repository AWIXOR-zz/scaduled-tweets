import { combineReducers } from 'redux';

import tweetReducer from './tweetReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
	tweets: tweetReducer,
	auth: authReducer,
});

export default rootReducer;
