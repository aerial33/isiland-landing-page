import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'hero-pattern': "url('/assets/images/isiland-image.jpg')",
			},
			fontFamily: {
				poppins: ['var(--font-poppins)', 'sans-serif'],
			},
			colors: {
				primary: '#A1A536',
				secondary: '#706668',
				'accent-yellow': '#F9C304',
				'coral-red': '#FF6452',
				'light-gray': '#DEDEDE',
				'intense-gray': '#D0D0D0',
				'white-400': 'rgba(255, 255, 255, 0.80)',
			},
		},
	},
	plugins: [],
}
export default config
