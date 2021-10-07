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

import { Provider } from 'react-redux';

import AppMenu from 'components/app-menu';


afterEach(cleanup);
const appRender = ( <AppMenu /> );

/*
it('matches snapshot', () => {
	const tree = renderer.create( <AppMenu /> ).toJSON();

	expect(tree).toMatchSnapshot();
});
*/


it('renders "App" without crashing', () => {
	const div = document.createElement('div');

	ReactDOM.render( <AppMenu />, div );

	ReactDOM.unmountComponentAtNode(div);
});


it('passes correct value to user.login', async () => {
	render(appRender);

	const items = screen.getAllByTestId('app-menu-option');

	await waitFor(() => {
		expect(items).toHaveLength(4);
	});
});