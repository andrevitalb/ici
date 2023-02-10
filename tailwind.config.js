const twColors = require("tailwindcss/colors")
const _ = require("lodash")

const colors = _.pick(twColors, ["gray", "green", "black", "white"])

const customColors = {
	...colors,
	blue: {
		200: "#b3b3cc",
		300: "#1946a6",
		400: "#001f60",
		500: "#000714",
	},
	yellow: "#ffa400",
	red: "#d50037",
}

module.exports = {
	content: [
		"./src/pages/**/*.ts",
		"./src/pages/**/*.tsx",
		"./src/components/**/*.ts",
		"./src/components/**/*.tsx",
	],
	theme: {
		extend: {
			fontFamily: {
				display: ["Lato", "sans-serif"],
				body: ["Source Sans Pro", "sans-serif"],
				mono: [
					"Menlo",
					"Monaco",
					"Lucida Console",
					"Liberation Mono",
					"DejaVu Sans Mono",
					"Bitstream Vera Sans Mono",
					"Courier New",
					"monospace",
				],
			},
			colors: customColors,
			animation: {
				spinner: "spinner 1.5s linear infinite",
			},
			keyframes: {
				spinner: {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(360deg)" },
				},
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
}
