import React from 'react';
import ReactDOM from 'react-dom';

import renderer from 'react-test-renderer';
import {
	render,
	screen,
	cleanup,
	waitFor,
	fireEvent,
} from '@testing-library/react';

import { store } from 'redux/store';
import { Provider } from 'react-redux';

import App from 'app/App';


afterEach(cleanup);
const appRender =
	<Provider store={store}>
		<App />
	</Provider>
;

/*
it('matches snapshot', () => {
	const tree = renderer.create(
		<Provider store={store}>
			<App />
		</Provider>
	).toJSON();

	expect(tree).toMatchSnapshot();
});
*/


it('renders "App" without crashing', () => {
	const div = document.createElement('div');

	ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>,
		div);

	ReactDOM.unmountComponentAtNode(div);
});


it('renders input and button elements correctly', async () => {
	render( appRender );

	const input = screen.getByTestId('edit-login');
	const button = screen.getByTestId('update-login');
	const user_login = screen.getByTestId('user-login');

	expect( input ).toBeInTheDocument();
	expect( button ).toBeInTheDocument();
	expect( user_login ).toBeInTheDocument();
});


it('passes correct value to user.login', async () => {
	render( appRender );

	const value = 'Testing Component';

	const input = screen.getByTestId('edit-login');
	const button = screen.getByTestId('update-login');
	const user_login = screen.getByTestId('user-login');

	fireEvent.change( input, { target: { value: value } });
	fireEvent.mouseDown( button );

	console.log( screen.getByTestId('user-login').textContent );

	await waitFor( () => {
		expect( user_login ).toHaveTextContent( value );
	});
});