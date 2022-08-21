/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'p-red': 'hsl(0, 100%, 74%)',
				'p-green': 'hsl(154, 59%, 51%)',
				'a-blue': 'hsl(248, 32%, 49%)',
				'n-dark-blue': 'hsl(249, 10%, 26%)',
				'n-grayish-blue': 'hsl(246, 25%, 77%)'
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif']
			}
		}
	},
	plugins: []
};
