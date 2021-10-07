import { useHistory } from 'react-router-dom';

import style from 'style';


const CreateAccount = () => {

	const history = useHistory(); // eslint-disable-line

	return (
		<section className={`${ style.page } page-CreateAccount`}>

			<h1 className={ style.title }> {'Create account,'} </h1>

			<input className={ style.input } type={'text'} placeholder={'name'} />
			<input className={ style.input } type={'email'} placeholder={'email'} />

			<input className={ style.input } type={'password'} placeholder={'password'} />
			<h3 className={ `${ style.error } ml-2` }> {'feedback message'} </h3>

			<input className={ style.input } type={'password'} placeholder={'repeat password'} />

			<button className={ style.buttonMain }> {'Create account'} </button>

			<span className={'flex flex-row gap-1 place-self-center'}>
				<h4 className={ style.message }> {'Have account?'} </h4>
				<h4 className={ style.link } onMouseDown={ () => history.push('/sign-in')}> {'Sign In'} </h4>
			</span>

		</section>
	)
};

export default CreateAccount;