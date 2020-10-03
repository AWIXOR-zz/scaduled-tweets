import { combineReducers } from "redux";

import tweetReducer from "./tweetReducer";
const rootReducer = combineReducers({ tweets: tweetReducer });

export default rootReducer;
