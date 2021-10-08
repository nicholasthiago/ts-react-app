import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import style from 'style';
import ValidItem from './components/validation-item';


interface AccountData {
	name: string,
	email: string,
	password: string,
};

const passwordValidadeMethods = [
	{
		test: '^(?=.{8,})',
		message: '8 characters length',
	},
	{
		test: '^(?=.*[a-z])',
		message: '1 lowercase letter',
	},
	{
		test: '^(?=.*[A-Z])',
		message: '1 uppercase letter',
	},
	{
		test: '^(?=.*[0-9])',
		message: '1 numeric character',
	},
];


const CreateAccount = () => {
	const history = useHistory();

	const [ valid, setValid ] = useState<Boolean>( false );
	const [ message, setMessage ] = useState<String | undefined>( undefined );
	const [ accountData, setAccountData ] = useState<AccountData>(
		{
			name: '',
			email: '',
			password: '',
		}
	);

	useEffect(() => {
		setValid( true );
		Object.values( accountData ).map( p => ( p === '' ) ? setValid( false ) : null );
	}, [ accountData ]);

	function handle_onChange ( key:string, value:string ) {
		if (key !== 'repeatPassword') {
			return setAccountData({ ...accountData, [key]: value })

		} else {
			if ( accountData.password !== value ) {
				return setMessage("password don't match");

			} else { return setMessage('') };
		};
	};

	return (
		<section className={`${ style.page } page-CreateAccount`}>

			<h1 className={ style.title }> {'Create account,'} </h1>

			<input className={ style.input } type={'text'} placeholder={'name'}
				onChange={ v => handle_onChange( 'name', v.target.value )} />

			<input className={ style.input } type={'email'} placeholder={'email'}
				onChange={ v => handle_onChange( 'email', v.target.value )} />

			<input className={ style.input } type={'password'} placeholder={'password'}
				onChange={ v => handle_onChange( 'password', v.target.value )} />

			<ul>
			{	(passwordValidadeMethods).map( (item,i) =>
					<ValidItem key={i}
						data={ accountData.password }
						test={ item.test }
						message={ item.message }
					/>
				)
			}
			</ul>

			<input className={ style.input } type={'password'} placeholder={'repeat password'}
				onChange={ v => handle_onChange( 'repeatPassword', v.target.value )} />
			
			<h3 className={ style.error }> { message } </h3>

			<button className={`${style.buttonMain} mt-4`}
				onMouseDown={ () => 
					( valid && message === '')
					? console.log( valid, accountData )
					: setMessage('some information is missing or invalid')
				}
			> {'Create account'} </button>

			<span className={'flex flex-row gap-1 place-self-center'}>
				<h4 className={ style.message }> {'Have account?'} </h4>
				<h4 className={ style.link } onMouseDown={ () => history.push('/sign-in')}> {'Sign In'} </h4>
			</span>

		</section>
	)
};

export default CreateAccount;