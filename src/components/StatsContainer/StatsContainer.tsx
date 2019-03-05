import * as React from 'react'

import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import { StatsQuery } from './__generated__/StatsQuery'

const statsQuery = gql`
  query StatsQuery {
    allFilms(orderBy: releaseDate_DESC) {
      id
      title
    }
  }
`

export function StatsContainer() {
  return (
    <div style={{ border: '1px solid orange' }}>
      <Query<StatsQuery>
        query={statsQuery}
      >
        {({ data, loading }) => {
          if (loading) {
            return (
              <div>Loading ...</div>
            )
          }

          if (!data) {
            return (
              <p>No data</p>
            )
          }

          const filmsCount = data.allFilms.length

          return (
            <div>
              <p>Films count: {filmsCount}</p>
            </div>
          )
        }}
      </Query>
    </div>
  )
}
