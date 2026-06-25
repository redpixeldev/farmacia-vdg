import tailwind from 'eslint-plugin-tailwindcss';
import eslintPluginAstro from 'eslint-plugin-astro';
import tsParser from '@typescript-eslint/parser';

export default [
	tailwind.configs.recommended,
	...eslintPluginAstro.configs.recommended,
	{
		files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'],
		languageOptions: {
			parser: tsParser,
		},
	},
	{
		settings: {
			tailwindcss: {
				// Tailwind v4 CSS-first entry for this project:
				cssConfigPath: 'src/styles/main.css',
			},
		},
	},
	{
		ignores: ['dist/', '.astro/', 'node_modules/'],
	},
];
