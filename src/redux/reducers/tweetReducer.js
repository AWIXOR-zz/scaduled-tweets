import initialState from "./initialState";
import produce from "immer";
import * as actions from "../actions/actionTypes";

export default (state = initialState.tweets, action) => {
  switch (action.type) {
    case actions.ADD_TWEET:
      return produce(state, (draft) => {
        draft.schaduled.push(action.payload);
      });
    case actions.EDIT_TWEET:
      return produce(state, (draft) => {
        if (action.activeTab === "schaduled") {
          draft.schaduled[
            draft.schaduled.findIndex((tweet) => tweet.id === action.id)
          ] = action.payload;
        } else {
          draft.archive[
            draft.archive.findIndex((tweet) => tweet.id === action.id)
          ] = action.payload;
        }
      });
    case actions.DELETE_TWEET:
      return produce(state, (draft) => {
        if (action.activeTab === "schaduled") {
          draft.schaduled.splice(
            draft.schaduled.findIndex((tweet) => tweet.id === action.id),
            1
          );
        } else {
          draft.archive.splice(
            draft.archive.findIndex((tweet) => tweet.id === action.id),
            1
          );
        }
      });
    default:
      return state;
  }
};
