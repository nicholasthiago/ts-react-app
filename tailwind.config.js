const colors = require('tailwindcss/colors')
module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: 'media', // or 'media' or 'class'
	theme: {
		extend: {},
		colors: {
			...colors,
			transparent: 'transparent',
			current: 'currentColor'
		}
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/forms'), // import tailwind forms
	],
}