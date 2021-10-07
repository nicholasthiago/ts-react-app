import React, {} from 'react';
import { useHistory } from 'react-router-dom';

import style from 'style';

import AppLogo from 'components/app-logo';


const FirstAccess = () => {

	const history = useHistory();

	return (
		<div className={'w-full h-screen gap-4 py-16 flex flex-col items-center justify-between'}>

			<AppLogo />

			<div className={'pb-12 flex flex-col gap-2 w-full items-center'}>

				<button
					onMouseDown={() => history.push('/sign-in')}
					className={ style.buttonMain }
				> {'Sign In'} </button>

				<button
					onMouseDown={() => history.push('/create-account')}
					className={ style.buttonSub }
				> {'Create Account'} </button>

				<h4 className={`${ style.message } font-medium text-blue-gray-400`}>
					{'Need help?'} </h4>
			</div>

		</div>
	);
};

export default FirstAccess ;