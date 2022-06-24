import React from "react";
import styled from "styled-components";
export default function Hamburger({ onClick }) {
  return (
    <div onClick={onClick}>
      <Line></Line>
      <Line></Line>
      <Line></Line>
    </div>
  );
}

const Line = styled.div`
  width: 35px;
  height: 5px;
  border-radius: 5px;
  background-color: black;
  margin: 6px 0;
  @media (min-width: 1000px) {
    display: none;
  }
`;
