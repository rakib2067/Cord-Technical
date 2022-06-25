import React, { useState } from "react";
import styled, { css } from "styled-components";
import { NavLink as Link } from "react-router-dom";

import * as colors from "../../colors";
import Arrow from "../../images/arrow-icon.png";
import SearchWhite from "../../images/search-icon-white.png";

export default function SideNavBar({ isOpen, setIsOpen }) {
  /* TODO: Write the necessary functions to open and close the sidebar */

  return (
    <>
      <SideNavBarCont isOpen={isOpen}>
        {/* TODO: Implement a hamburger icon that controls the open state of the sidebar. This control should only be visible on mobile devices via CSS media queries */}
        {/* The sidebar should slide in from left */}

        {/* Done using Hamburger component in discover page */}
        <SideNavHeader>
          Wesley
          <img src={Arrow} alt="Arrow pointing down" />
        </SideNavHeader>
        <SideNavMainLink
          onClick={() => setIsOpen((prev) => !prev)}
          to="/discover"
          exact
        >
          Discover
          <img src={SearchWhite} alt="Magnifying glass" />
        </SideNavMainLink>
        <SideNavSectionTitle>
          <HeaderText>Watched</HeaderText>
        </SideNavSectionTitle>
        <NavLink to="/watched/movies">Movies</NavLink>
        <NavLink to="/watched/tv-shows">Tv Shows</NavLink>
        <SideNavSectionTitle>
          <HeaderText>Saved</HeaderText>
        </SideNavSectionTitle>
        <NavLink to="/saved/movies">Movies</NavLink>
        <NavLink to="/saved/tv-shows">Tv Shows</NavLink>
      </SideNavBarCont>
    </>
  );
}

const SideNavBarCont = styled.div`
  position: fixed;
  z-index: 9;
  width: 260px;
  height: 100%;
  background-color: ${colors.sideNavBar};
  color: white;
  left: 0%;
  transition: 350ms;
  @media (max-width: 1000px) {
    left: ${(props) => (props.isOpen ? "0%" : "-100%")};
  }
`;

const SectionsStyles = css`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 35px 35px 25px 35px;
  font-size: 1.6em;
  font-weight: 700;
  color: white;
`;

const SideNavMainLink = styled(Link)`
  ${SectionsStyles}

  &:hover, &:focus-visible {
    background: ${colors.sideNavBarHover};
  }

  &.active {
    background: ${colors.primaryColor};
  }
`;

const SideNavHeader = styled.div`
  ${SectionsStyles}
`;

const SideNavSectionTitle = styled.div`
  font-size: 1.6em;
  font-weight: 700;
  padding: 25px 0 15px 35px;
`;

const HeaderText = styled.div`
  padding: 0 35px 10px 0;
  border-bottom: 1px solid ${colors.lightBackground};
`;

const NavLink = styled(Link)`
  display: block;
  color: white;
  opacity: 0.8;
  font-size: 1.2em;
  padding: 10px 35px;

  &:hover,
  &:focus-visible {
    opacity: 1;
    background: ${colors.sideNavBarHover};
  }

  &.active {
    background: ${colors.primaryColor};
    opacity: 1;
  }
`;
