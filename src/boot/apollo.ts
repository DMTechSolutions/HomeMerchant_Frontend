import { boot } from 'quasar/wrappers'

import { provideApolloClient } from '@vue/apollo-composable'
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client/core'

export default boot(() => {
  // HTTP connection to the API
  const httpLink = createHttpLink({
    // You should use an absolute URL here
    uri: 'http://localhost:3002/graphql'
  })

  // Cache implementation
  const cache = new InMemoryCache()

  // Create the apollo client
  const apolloClient = new ApolloClient({
    link: httpLink,
    cache
  })
  // Set instance on app
  provideApolloClient(apolloClient)
})
