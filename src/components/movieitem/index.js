import React, { useState } from "react";
import styled from "styled-components";

import { sideNavBar, primaryColor } from "../../colors";
import Placeholder from "../../images/placeholder.png";

export default function MovieItem({ movie, genres }) {
  const [error, setError] = useState(false);
  genres = genres.filter((genre) => {
    return movie.genre_ids.some((id) => id == genre.id);
  });
  let genresLength = genres.length - 1;
  return (
    // TODO: Complete the MovieItem component

    <MovieItemWrapper>
      <LeftCont>
        <MoviePoster
          onError={() => setError(true)}
          src={error ? Placeholder : movie.url}
          alt=""
        />
      </LeftCont>
      <RightCont>
        <Content>
          <MovieHeader>
            <Title>{movie.title}</Title>
            <Rating>{movie.vote_average}</Rating>
          </MovieHeader>
          <GenresContainer>
            {genres.map((genre, index) => {
              if (genresLength == 0)
                return <Genre key={index}>{genre.name}</Genre>;
              else if (index == 0)
                return <Genre key={index}>{genre.name} |</Genre>;
              else if (index == genresLength)
                return <Genre key={index}> {genre.name}</Genre>;
              else return <Genre key={index}> {genre.name} |</Genre>;
            })}
          </GenresContainer>

          <Description>{movie.overview}</Description>
        </Content>
        <ReleaseDate>{movie.release_date}</ReleaseDate>
      </RightCont>
    </MovieItemWrapper>
  );
}

const MovieItemWrapper = styled.li`
  position: relative;
  display: flex;
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  margin: 15px 0;
  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const MovieHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Content = styled.div``;

const MoviePoster = styled.img`
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
  @media (min-width: 1200px) {
    width: unset;
    height: unset;
  }
  @media (max-width: 600px) {
    height: 100%;
  }
`;

const GenresContainer = styled.div`
  margin-bottom: 15px;
  @media (max-width: 600px) {
    margin-bottom: 5px;
  }
`;

const Genre = styled.span`
  color: ${primaryColor};
  font-weight: bold;
  @media (max-width: 600px) {
    font-size: 0.6rem;
  }
`;

const LeftCont = styled.div`
  flex: 1;
  @media (min-width: 1200px) {
    flex: unset;
  }
  @media (max-width: 1200px) {
    flex: unset;
  }
  @media (max-width: 600px) {
    flex: 1;
  }
`;

const RightCont = styled.div`
  flex: 2;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  @media (min-width: 1200px) {
    flex: unset;
  }
  @media (max-width: 600px) {
    flex: 3;
  }
`;

const ReleaseDate = styled.span`
  color: ${primaryColor};
  @media (max-width: 600px) {
    font-size: 0.6rem;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin: 0;
  font-weight: 900;
  color: ${sideNavBar};
  @media (max-width: 1450px) {
    font-size: 1.3rem;
  }
  @media (max-width: 1200px) {
    font-size: 1.2rem;
  }
  @media (max-width: 1200px) {
    font-size: 1.3rem;
  }
  @media (max-width: 600px) {
    font-size: 0.7rem;
  }
`;

const Rating = styled.span`
  background: ${primaryColor};
  color: #fff;
  border-radius: 5px;
  padding: 5px 8px;
  align-self: center;
  font-weight: bold;
  @media (max-width: 600px) {
    font-size: 0.6rem;
  }
`;

const Description = styled.p`
  margin: 0;
  max-width: 75ch;
  font-size: 1rem;
  @media (max-width: 1300px) {
    font-size: 0.85rem;
  }
  @media (max-width: 600px) {
    font-size: 0.6rem;
  }
`;
