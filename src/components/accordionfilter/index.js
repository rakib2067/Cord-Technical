import React, { useState } from "react";
import styled from "styled-components";

export default function AccordionFilter({ name, items }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <AccordionItem>
      <AccordionHeader onClick={() => setIsActive((prev) => !prev)}>
        <AccordionIcon>{isActive ? "-" : "+"}</AccordionIcon>
        <h2>Select {name}</h2>
      </AccordionHeader>
      {isActive && (
        <AccordionList>
          {items.map((item) => (
            <AccordionInput key={item.id} name={item.name} id={item.id} />
          ))}
        </AccordionList>
      )}
    </AccordionItem>
  );
}

function AccordionInput({ id, name }) {
  const [checked, setChecked] = useState(false);
  return (
    <AccordionInputWrapper>
      <input
        value={checked}
        onChange={() => setChecked((prev) => !prev)}
        type="checkbox"
        id={id}
        name={id}
      />
      <label htmlFor={id}>{name}</label>
    </AccordionInputWrapper>
  );
}

const AccordionItem = styled.div``;

const AccordionIcon = styled.span`
  transition: 300ms;
`;

const AccordionHeader = styled.header`
  display: flex;
  align-items: center;
  cursor: pointer;

  h2 {
    font-size: 1.2rem;
    font-weight: normal;
    margin-left: 1rem;
  }
  span {
    font-size: 2rem;
    transition: 300ms;
  }
`;

const AccordionInputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  input {
    margin: 0 1rem 0 0;
    width: 16px;
    height: 16px;
    background-color: red;
  }
`;

const AccordionList = styled.main``;
