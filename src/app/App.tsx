import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import style from 'style';

import AppMenu from 'components/app-menu';

import Home from 'pages/home';

import SignIn from 'pages/sign-in';
import FirstAccess from 'pages/first-access';
import CreateAccount from 'pages/create-account';


// Auth Routes => Sign In/Up pages
const AuthRoutes = () => {
	return (
		<BrowserRouter>
			<Route component={ Home }	path={'/home'} />

			<Route component={ CreateAccount }	path={'/create-account'} />
			<Route component={ SignIn }			path={'/sign-in'}		 />
			<Route component={ FirstAccess }	path={'/'} exact		 />
		</BrowserRouter>
	);
};

// Routes => access app pages, if user is logged
const Routes = () => {
	return (
		<BrowserRouter>
			<AppMenu />
			<Route component={ FirstAccess }  path={'/'} />
		</BrowserRouter>
	);
};


const App = () => {

	const auth = false;

	return (
		<div className={`app-main ${style.app}`}>
			{ auth ? <Routes /> : <AuthRoutes /> }
		</div>
	);
};

export default App;