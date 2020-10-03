import * as actions from "./actionTypes";

export const addTweet = (item) => ({
  type: actions.ADD_TWEET,
  payload: item,
});
export const editTweet = (id, item) => ({
  type: actions.EDIT_TWEET,
  id: id,
  payload: item,
});
export const deleteTweet = (id, activeTab) => ({
  type: actions.DELETE_TWEET,
  id: id,
  activeTab: activeTab,
});
