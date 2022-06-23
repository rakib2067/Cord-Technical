import React from "react";
import styled from "styled-components";

export default function MovieItem({ movie, genres }) {
  genres = genres.filter((genre) => {
    return movie.genre_ids.some((id) => id == genre.id);
  });

  return (
    // TODO: Complete the MovieItem component

    <MovieItemWrapper>
      <LeftCont>
        <img src={movie.url} alt="" />
      </LeftCont>
      <RightCont>
        <Title>{movie.title}</Title>
        <p>Genres: {genres.map((genre) => genre.name)}</p>
        <p>Release: {movie.release_date}</p>
        <p>Rating: {movie.vote_average}</p>
        <p>Overview: {movie.overview}</p>
      </RightCont>
    </MovieItemWrapper>
  );
}

const MovieItemWrapper = styled.div`
  position: relative;
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  margin: 15px 0;
`;

const LeftCont = styled.div`
  display: inline-block;
`;

const RightCont = styled.div`
  display: inline-block;
`;

const Title = styled.h2`
  font-size: 1.4;
`;
