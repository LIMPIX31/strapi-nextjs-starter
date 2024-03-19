import base from '@ltos/config-eslint'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
	...base,
	{
		ignores: ['**/*.html', 'apps/web/.next', 'apps/strapi/dist'],
	},
]
