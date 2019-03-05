/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllFilmQuery
// ====================================================

export interface AllFilmQuery_allFilms {
  __typename: "Film";
  id: string;
  /**
   * The title of this film
   */
  title: string;
}

export interface AllFilmQuery {
  allFilms: AllFilmQuery_allFilms[];
}
