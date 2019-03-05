import * as React from 'react'

import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const allFilmQuery = gql`
  query allFilmQuery {
    allFilms {
      id
      title
    }
  }
`

export function FilmListContainer() {
  return (
    <Query query={allFilmQuery}>
      {({ loading, data, error }) => {
        console.log('loading: ', loading)
        console.log('data: ', data)
        console.log('error: ', error)

        if (loading) {
          return (
            <div>Loading ...</div>
          )
        }

        return (
          <ul>
            {data.allFilms.map((film: any) => (
              <li key={film.id}>
                {film.title}
              </li>
            ))}
          </ul>
        )
      }}
    </Query>
  )
}
