import { useHistory } from 'react-router-dom';

import style from 'style';

const SignIn = () => {

	const history = useHistory();

	return (
		<section className={`${ style.page } page-SignIn`}>

			<h1 className={ style.title }> {'Sign in,'} </h1>

			<input className={ style.input } type={'email'} placeholder={'email'} />
			<input className={ style.input } type={'password'} placeholder={'password'} />

			<h3 className={ `${ style.error } ml-2` }> {'feedback message'} </h3>

			<button className={`${ style.buttonMain } mt-4`}> {'Sign in'} </button>

			<span className={'flex flex-row gap-1 place-self-center'}>
				<h4 className={ style.message }> {"Don't have account?"} </h4>
				<h4 className={ style.link } onMouseDown={() => history.push('/create-account')}> {'Create'} </h4>
			</span>

		</section>
	)
};

export default SignIn;