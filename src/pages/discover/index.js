import React, { useEffect, useState, useCallback } from "react";

import styled from "styled-components";

import * as colors from "../../colors";
import * as fetcher from "../../fetcher";
import { fetchPopularMovies, fetchGenres, searchMovies } from "../../fetcher";

import SearchFilters from "../../components/searchfilter";
import MovieList from "../../components/movielist";
import Hamburger from "../../components/hamburger";

export default function Discover({ isOpen, setIsOpen }) {
  const [keyword, setKeyword] = useState("");
  const [year, setYear] = useState(0);
  const [results, setResults] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [genreOptions, setGenreOptions] = useState([]);
  const [ratingOptions, setRatingOptions] = useState([
    { id: 7.5, name: 7.5 },
    { id: 8, name: 8 },
    { id: 8.5, name: 8.5 },
    { id: 9, name: 9 },
    { id: 9.5, name: 9.5 },
    { id: 10, name: 10 },
  ]);
  const [languageOptions, setLanguageOptions] = useState([
    { id: "GR", name: "Greek" },
    { id: "EN", name: "English" },
    { id: "RU", name: "Russian" },
    { id: "PO", name: "Polish" },
  ]);

  // TODO: Preload and set the popular movies and movie genres when page loads
  useEffect(() => {
    loadData();
    setIsOpen(false);
  }, []);

  const loadData = useCallback(async () => {
    let { results, total_results } = await fetchPopularMovies();
    let { genres } = await fetchGenres();
    setResults(results);
    setTotalCount(total_results);
    setGenreOptions(genres);
  }, []);

  // TODO: Update search results based on the keyword and year inputs
  useEffect(() => {
    keyword && handleSearch(keyword, year);
    !keyword && loadData();
  }, [keyword, year]);

  const handleOnSearch = useCallback((value, type) => {
    if (type == "text") setKeyword(value);
    else setYear(value);
  }, []);

  const handleSearch = useCallback(
    async (keyword, year) => {
      let { results, total_results } = await searchMovies(keyword, year);
      setResults(results);
      setTotalCount(total_results);
    },
    [keyword, year]
  );

  //Sidebar Logic
  const handleClose = useCallback(() => {
    if (isOpen) setIsOpen((prev) => !prev);
  }, [isOpen]);
  const handleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <DiscoverWrapper onClick={handleClose}>
      <Header>
        <Hamburger onClick={handleOpen} />
        <MobilePageTitle>Discover</MobilePageTitle>
      </Header>
      {/* MobilePageTitle should become visible on mobile devices via CSS media queries*/}
      <MovieFilters>
        <SearchFilters
          genres={genreOptions}
          ratings={ratingOptions}
          languages={languageOptions}
          searchMovies={(keyword, year) => this.searchMovies(keyword, year)}
          onSearch={handleOnSearch}
        />
      </MovieFilters>
      <TotalCount>{totalCount} results</TotalCount>
      <MovieResults>
        <MovieList movies={results || []} genres={genreOptions || []} />
      </MovieResults>
    </DiscoverWrapper>
  );
}

const Header = styled.header`
  display: flex;
  align-items: center;
`;
const DiscoverWrapper = styled.main`
  padding: 45px;
  @media (max-width: 1000px) {
    padding: 25px;
  }
  @media (max-width: 600px) {
    padding: 15px;
  }
`;

const MovieResults = styled.div`
  display: inline-block;
  width: calc(100% - 295px);
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const MovieFilters = styled.div`
  width: 280px;
  float: right;
  margin-top: 35px;
  @media (max-width: 1000px) {
    float: unset;
    width: 100%;
  }
`;

const MobilePageTitle = styled.h1`
  display: none;
  @media (max-width: 1000px) {
    display: block;
    margin: 0 0 0 2rem;
  }
`;

const TotalCount = styled.strong`
  display: block;
  font-size: 0.9rem;
  font-weight: normal;
`;
