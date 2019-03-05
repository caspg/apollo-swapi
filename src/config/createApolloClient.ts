import ApolloClient from 'apollo-boost'

export function createApolloClient() {
  return new ApolloClient({
    uri: 'http://swapi.graph.cool/',
  })
}
