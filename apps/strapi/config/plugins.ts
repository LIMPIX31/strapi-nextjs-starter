import { join } from 'node:path'

export default () => ({
	graphql: {
		enabled: true,
		config: {
			endpoint: '/graphql',
			shadowCRUD: true,
			playgroundAlways: false,
			depthLimit: 7,
			amountLimit: 100,
			generateArtifacts: true,
			artifacts: {
				schema: join(process.cwd(), 'schema.graphql'),
			},
			apolloServer: {
				tracing: false,
				introspection: true,
			},
		},
	},
})
