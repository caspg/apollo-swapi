/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: LatestFilmDetailsQuery
// ====================================================

export interface LatestFilmDetailsQuery_Film {
  __typename: "Film";
  /**
   * The title of this film
   */
  title: string;
}

export interface LatestFilmDetailsQuery {
  Film: LatestFilmDetailsQuery_Film | null;
}

export interface LatestFilmDetailsQueryVariables {
  id: string;
}
