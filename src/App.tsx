import * as React from 'react'

import { ApolloProvider } from 'react-apollo'

import { createApolloClient } from './config/createApolloClient'
import { StatsContainer } from './components/StatsContainer'
import { FilmListContainer } from './components/FilmListContainer'

const apolloClient = createApolloClient()

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <div>
        Hello World!
      </div>

      <br />
      <br />

      <StatsContainer />

      <br />
      <br />

      <FilmListContainer />
    </ApolloProvider>
  )
}

export default App
