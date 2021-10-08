import { action } from 'typesafe-actions';

// Types Declaration
export interface User {
	user		: string;
	email		: string;
	password	: string;
}

export interface UserState {
	user		: User;
}

export const UserTypes = {
	USER_SET: 'USER_SET'
};


export const userSet = ( data: User ) => action( UserTypes.USER_SET, data );