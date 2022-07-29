/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Rubik", "sans-serif"],
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
