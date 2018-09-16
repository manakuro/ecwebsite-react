import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { BatchHttpLink } from 'apollo-link-batch-http'
import { persistCache } from 'apollo-cache-persist'

const END_POINT = 'https://api.graph.cool/simple/v1/cj842kiz00ynm0180s8s3d83d'

export default function configureApolloClient() {
  const cache = new InMemoryCache({
    addTypename: false,
  })

  persistCache({
    cache,
    storage: window.localStorage,
  })

  const httpLink = new BatchHttpLink({
    uri: END_POINT,
  })

  return new ApolloClient({
    link: httpLink,
    cache,
  })
}
