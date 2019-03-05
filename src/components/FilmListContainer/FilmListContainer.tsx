import * as React from 'react'

import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import { AllFilmQuery } from './__generated__/allFilmQuery'

const allFilmQuery = gql`
  query AllFilmQuery {
    allFilms(orderBy: releaseDate_DESC) {
      id
      title
    }
  }
`

export function FilmListContainer() {
  return (
    <div style={{ border: '1px solid blue' }}>
      <Query<AllFilmQuery>
        query={allFilmQuery}
      >
        {({ loading, data, error }) => {
          console.log('loading: ', loading)
          console.log('data: ', data)
          console.log('error: ', error)

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

          return (
            <ul>
              {data.allFilms.map((film) => (
                <li key={film.id}>
                  {film.title}
                </li>
              ))}
            </ul>
          )
        }}
      </Query>
    </div>
  )
}
