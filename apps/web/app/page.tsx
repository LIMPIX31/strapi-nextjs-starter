import type { Metadata }      from 'next'

import type { Client }        from '@urql/core'
import      { cacheExchange } from '@urql/core'
import      { createClient }  from '@urql/core'
import      { fetchExchange } from '@urql/core'
import      { registerUrql }  from '@urql/next/rsc'
import      { graphql }       from 'gql.tada'

const { getClient } = registerUrql(() => {
	return createClient({
		url: 'http://localhost:1337/graphql',
		fetchOptions: {
			headers: {
				Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_KEY}`,
			},
		},
		exchanges: [cacheExchange, fetchExchange],
	})
})

const todosQuery = graphql(`
	query Todos {
		todos {
			meta {
				pagination {
					total
					page
					pageSize
					pageCount
				}
			}
			data {
				id
				attributes {
					description
				}
			}
		}
	}
`)

export default async function () {
	const client: Client = await getClient()
	const result = await client.query(todosQuery, {})

	if (!result.data || !result.data.todos) {
		return <div>Error: {result.error?.message ?? 'Unknown error'}</div>
	}

	return (
		<div>
			{result.data.todos.data.map((todo) => (
				<div key={todo.id}>{todo.attributes!.description}</div>
			))}
		</div>
	)
}
