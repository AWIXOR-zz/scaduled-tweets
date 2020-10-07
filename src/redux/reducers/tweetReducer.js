import initialState from './initialState';
import produce from 'immer';
import * as actions from '../actions/actionTypes';

export default (state = initialState.tweets, action) => {
	switch (action.type) {
		case actions.SET_SCHEDULED_TWEETS:
			return produce(state, (draft) => {
				draft.scheduled = action.payload;
			});

		case actions.SET_TWEETED_TWEETS:
			return produce(state, (draft) => {
				draft.archive = action.payload;
			});

		case actions.ADD_TWEET:
			return produce(state, (draft) => {
				draft.scheduled.push(action.payload);
			});
		case actions.EDIT_TWEET:
			return produce(state, (draft) => {
				if (action.activeTab === 'scheduled') {
					draft.scheduled[
						draft.scheduled.findIndex((tweet) => tweet._id === action.id)
					] = action.payload;
				} else {
					draft.archive[
						draft.archive.findIndex((tweet) => tweet._id === action.id)
					] = action.payload;
				}
			});
		case actions.DELETE_TWEET:
			return produce(state, (draft) => {
				if (action.activeTab === 'scheduled') {
					draft.scheduled.splice(
						draft.scheduled.findIndex((tweet) => tweet._id === action.id),
						1
					);
				} else {
					draft.archive.splice(
						draft.archive.findIndex((tweet) => tweet._id === action.id),
						1
					);
				}
			});
		default:
			return state;
	}
};
