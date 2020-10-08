import * as actions from './actionTypes';

export const setAuth = (user) => ({
	type: actions.SET_USER,
	payload: user,
});
