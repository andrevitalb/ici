module.exports = {
	extends: [
		"plugin:prettier/recommended",
    "plugin:promise/recommended",
		"react-app",
		"plugin:@next/next/recommended",
	],
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: "./tsconfig.json",
	},
	env: {
		node: true,
	},
	rules: {
		"@typescript-eslint/no-unused-vars": "off",
		"react/react-in-jsx-scope": "off",
		"jsx-a11y/anchor-is-valid": "off",
		"@next/next/no-img-element": "off",
		"@next/next/no-css-tags": "off",
	},
	overrides: [
		{
			files: ["*.tsx"],
			rules: {
				"@typescript-eslint/explicit-function-return-type": ["off"],
				"@typescript-eslint/explicit-module-boundary-types": ["off"],
			},
		},
	],
}
