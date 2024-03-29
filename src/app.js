import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import SideNavBar from "./components/sidenavbar";

import Discover from "./pages/discover";

import "./css/app.scss";

export default function App() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Router>
      <PageContainer>
        <SideNavBar setIsOpen={setIsOpen} isOpen={isOpen} />
        <ContentWrapper>
          <Switch>
            <Route path="/discover">
              <Discover isOpen={isOpen} setIsOpen={setIsOpen} />
            </Route>
          </Switch>
        </ContentWrapper>
      </PageContainer>
    </Router>
  );
}

const ContentWrapper = styled.main`
  padding-left: 260px;
  width: 100%;
  @media (max-width: 1000px) {
    padding-left: 0px;
  }
`;

const PageContainer = styled.main`
  overflow-x: hidden;
  display: flex;
`;
