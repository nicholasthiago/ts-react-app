import { action } from 'typesafe-actions';

// Types Declaration
export interface User {
	login		: string;
	avatar_url	: string;
	created_at	: string;
}

export interface UserState {
	user		: User;
}

export const UserTypes = {
	USER_SET: 'USER_SET'
};


export const userSet = ( data: User ) => action( UserTypes.USER_SET, data );