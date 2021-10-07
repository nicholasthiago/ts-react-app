import { useState } from 'react';

import * as solid from '@heroicons/react/solid';
import * as outline from '@heroicons/react/outline';


const ref = [
	{
		label	: 'home',
		solid	: <solid.HomeIcon				className={'w-6 h-6'}	/>,
		outline	: <outline.HomeIcon				className={'w-6 h-6'}	/>,
	},{
		label	: 'cards',
		solid	: <solid.CreditCardIcon			className={'w-6 h-6'}	/>,
		outline	: <outline.CreditCardIcon		className={'w-6 h-6'}	/>,
	},{
		label	: 'balance',
		solid	: <solid.CurrencyDollarIcon		className={'w-6 h-6'}	/>,
		outline	: <outline.CurrencyDollarIcon	className={'w-6 h-6'}	/>,
	},{
		label	: 'settings',
		solid	: <solid.CogIcon				className={'w-6 h-6'}	/>,
		outline	: <outline.CogIcon				className={'w-6 h-6'}	/>,
	},
];


const AppMenu = () => {

	const [ active, setActive ] = useState('home');

	return (
		<section className={'w-full flex flex-col items-center bg-gray-100 shadow-lg fixed bottom-0 py-3'}>

			<div className={'gap-2 w-10/12 flex flex-row justify-center'}>
				{	( ref ).map( option =>
						<button key={ option.label }
							data-testid={'app-menu-option'}
							onMouseDown={ () => setActive( option.label ) }
							className={'w-2/10 px-4 flex flex-col items-center hover:cursor-pointer'}
						>
							{ active === option.label ? option.solid : option.outline }
							<h3 className={''}> { option.label } </h3>
						</button>
					)
				}
			</div>

		</section>
	);
};


export default AppMenu;