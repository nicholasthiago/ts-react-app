import React, {
	useRef		,
	useState	,
	useEffect	,
} from 'react';

import { userSet } from 'redux/user/actions';
import { userState } from 'redux/user/reducer';
import { useAppSelector, useAppDispatch } from 'hooks';

import AppMenu from 'components/app-menu/app-menu.component';


const App = () => {

	const inputRef = useRef<HTMLInputElement>( null );

	const user = useAppSelector( userState );
	const [ value, setValue ] = useState<string>('');

	const dispatch = useAppDispatch();

	async function loadData() {
		const response = await fetch('https://api.github.com/users/nkxavis2907').then( response => response.json() );

		return dispatch(userSet( response ));
	};

	useEffect( () => {

		loadData();

		inputRef.current?.focus();
	}, []); // eslint-ignore-line

	function updateUser ( value: string ) {
		let newUser = user;

		newUser = {
			...newUser,
			login: typeof value === 'string' ? value : user.login,
		};

		try {
			return dispatch(userSet( newUser ));
		} catch (error) {
			return console.log( error );
		};
	};

	return (
			<div className={'app-main flex flex-col items-center w-full'}>

				<AppMenu />

				<div className={'my-4 flex flex-row-reverse justify-center items-center'}>
					<h1 className={'mx-4'} data-testid={'user-login'}> { user.login } </h1>
					<img className={'w-12 h-12 rounded-3xl'} src={ user.avatar_url } alt={ user.login } />
				</div>

				<h4 className={'font-medium my-4'}> { user.created_at } </h4>

				<input type={'text'}
					ref={ inputRef }
					value={ value }
					data-testid={'edit-login'}
					onChange={ e => setValue( e.target.value )}
					onKeyPress={ e => e.key === 'Enter' ? updateUser( value ) : null }
					className={'edit-username my-4 shadow-md rounded-md border-gray-200 focus:border-indigo-500'}
				/>

				<h2 data-testid={'user-login-verify'} className={'value-verify'}> {value} </h2>

				<button
					data-testid={'update-login'}
					onMouseDown={ () => updateUser( value ) }
					className={'px-8 py-3 rounded-md bg-gray-200'}
				>
					{'Atualizar usuário'}
				</button>

			</div>
	);
};

export default App;