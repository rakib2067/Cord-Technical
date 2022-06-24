import React from "react";
import styled, { css } from "styled-components";

import * as colors from "../../colors";
import AccordionFilter from "../accordionfilter";
import SearchBar from "../../components/searchbar";

import SearchIcon from "../../images/search-icon-yellow.png";
import YearIcon from "../../images/year-icon.png";
import Filter from "../../images/filter-icon.png";
export default function SearchFilters({
  genres,
  ratings,
  languages,
  onSearch,
}) {
  return (
    <FiltersWrapper>
      <Button>
        <img src={Filter} />
      </Button>
      <SearchFiltersCont className="search_inputs_cont" marginBottom>
        <SearchBar
          id="keyword_search_input"
          type="text"
          onChange={onSearch}
          icon={{ src: SearchIcon, alt: "Magnifying glass" }}
          placeholder="Search for movies"
        />
        <SearchBar
          id="year_search_input"
          type="number"
          onChange={onSearch}
          icon={{ src: YearIcon, alt: "Calendar icon" }}
          placeholder="Year of release"
        />
      </SearchFiltersCont>
      <SearchFiltersTitleCont>
        <CategoryTitle>Movie</CategoryTitle>
        {/* TODO: Complete the "AccordionFilter" component and re-use it for all filter categories */}
        <AccordionFilter name="genre(s)" items={genres} />
        <AccordionFilter name="min. vote" items={ratings} />
        <AccordionFilter name="language" items={languages} />
      </SearchFiltersTitleCont>
    </FiltersWrapper>
  );
}

const Button = styled.button`
  display: block;
  align-items: center;
  width: 15%;
  padding: 0;
  margin-bottom: 3px;
  background: ${colors.lightBackground};
  outline: 0;
  border: 0;
  border-bottom: 2px solid;
  color: ${colors.primaryColor};
  @media (min-width: 1000px) {
    display: none;
  }
`;
const FiltersWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  @media (max-width: 1000px) {
    flex-direction: row-reverse;
    align-items: center;
  }
`;

const SearchFiltersCont = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  margin-right: 0%;

  .search_bar_wrapper:first-child {
    margin-bottom: 15px;
  }

  ${(props) =>
    props.marginBottom &&
    css`
      margin-bottom: 15px;
    `}
  @media(max-width:1000px) {
    background: ${colors.lightBackground};
    flex: 2;
    margin: 0 1rem 0 0;
    padding: 0;
  }
  @media (max-width: 600px) {
    background: ${colors.lightBackground};
    flex: 2;
  }
`;
const SearchFiltersTitleCont = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;

  .search_bar_wrapper:first-child {
    margin-bottom: 15px;
  }

  ${(props) =>
    props.marginBottom &&
    css`
      margin-bottom: 15px;
    `}
  @media(max-width:1000px) {
    display: none;
  }
`;

const CategoryTitle = styled.h3`
  margin: 0 0 15px 0;
`;
