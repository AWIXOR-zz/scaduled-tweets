import initialState from './initialState';
import produce from 'immer';
import * as actions from '../actions/actionTypes';

export default (state = initialState.auth, action) => {
	switch (action.type) {
		case actions.SET_USER:
			return produce(state, (draft) => {
				draft.user = action.payload;
			});

		default:
			return state;
	}
};
