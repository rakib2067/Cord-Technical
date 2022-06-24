import React from "react";
import styled from "styled-components";

import MovieItem from "../movieitem";

export default function MovieList({ movies, genres }) {
  let movieList;
  if (movies.length > 0)
    movieList = movies.map((movie) => (
      <MovieItem key={movie.id} movie={movie} genres={genres} />
    ));
  else
    movieList = (
      <FeedBack>
        <h2>No Results Found</h2>
      </FeedBack>
    );

  return <MoviesWrapper>{movieList}</MoviesWrapper>;
}

const MoviesWrapper = styled.div`
  position: relative;
  width: 100%;
`;
const FeedBack = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  margin: 15px 0;
`;
