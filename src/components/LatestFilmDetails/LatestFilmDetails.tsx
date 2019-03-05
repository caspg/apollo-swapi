import * as React from 'react'

import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import { LatestFilmDetailsQuery, LatestFilmDetailsQueryVariables } from './__generated__/LatestFilmDetailsQuery'

const latestFilmDetails = gql`
  query LatestFilmDetailsQuery($id: ID!) {
    Film(id: $id) {
      id
      title
    }
  }
`

export function LatestFilmDetails() {
  const filmId = 'cj0nxmy69ga640114e3eb7bn2'

  return (
    <div style={{ border: '1px solid green', margin: 10 }}>
      <Query<LatestFilmDetailsQuery, LatestFilmDetailsQueryVariables>
        query={latestFilmDetails}
        variables={{ id: filmId }}
      >
        {({ data, loading }) => {
          if (loading) {
            return (
              <div>Loading ...</div>
            )
          }

          if (!data || !data.Film) {
            return (
              <p>No data</p>
            )
          }

          return (
            <p>
              title: {data.Film.title}
            </p>
          )
        }}
      </Query>
    </div>
  )
}
