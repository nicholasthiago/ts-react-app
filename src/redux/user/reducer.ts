import { Reducer } from 'redux';
import { User, UserTypes } from './actions';

import { RootState } from 'redux/store';

export const initState: User = {
	login		: '',
	avatar_url	: '',
	created_at	: '',
};

const userReducer: Reducer<User> = ( state=initState, action ) => {
	switch ( action.type ) {

		case UserTypes.USER_SET:
			console.log( action.payload );
			try {
				return state = action.payload;
			} catch {
				return console.log('error...');
			}

		default: return state;
	}
};

export default userReducer;

export const userState = ( state: RootState ) => state.user;