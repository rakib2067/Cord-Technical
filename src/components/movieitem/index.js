import React from "react";
import styled from "styled-components";

import { sideNavBar, primaryColor } from "../../colors";

export default function MovieItem({ movie, genres }) {
  genres = genres.filter((genre) => {
    return movie.genre_ids.some((id) => id == genre.id);
  });
  let genresLength = genres.length - 1;
  return (
    // TODO: Complete the MovieItem component

    <MovieItemWrapper>
      <LeftCont>
        <MoviePoster src={movie.url} alt="" />
      </LeftCont>
      <RightCont>
        <Content>
          <MovieHeader>
            <Title>{movie.title}</Title>
            <Rating>{movie.vote_average}</Rating>
          </MovieHeader>
          <GenresContainer>
            {genres.map((genre, index) => {
              if (index == 0) return <Genre>{genre.name} |</Genre>;
              else if (index == genresLength)
                return <Genre> {genre.name}</Genre>;
              else return <Genre> {genre.name} |</Genre>;
            })}
          </GenresContainer>

          <Description>{movie.overview}</Description>
        </Content>
        <ReleaseDate>{movie.release_date}</ReleaseDate>
      </RightCont>
    </MovieItemWrapper>
  );
}

const MovieItemWrapper = styled.div`
  position: relative;
  display: flex;
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  margin: 15px 0;
`;

const MovieHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Content = styled.div``;

const MoviePoster = styled.img`
  height: 100%;
`;

const GenresContainer = styled.div`
  margin-bottom: 15px;
`;

const Genre = styled.span`
  color: ${primaryColor};
  font-weight: bold;
`;

const LeftCont = styled.div``;

const RightCont = styled.div`
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ReleaseDate = styled.span`
  color: ${primaryColor};
`;

const Title = styled.h2`
  font-size: 1.7rem;
  margin: 0;
  font-weight: 900;
  color: ${sideNavBar};
`;

const Rating = styled.span`
  background: ${primaryColor};
  color: #fff;
  border-radius: 5px;
  padding: 5px 8px;
  align-self: center;
  font-weight: bold;
`;

const Description = styled.p`
  margin: 0;
`;
