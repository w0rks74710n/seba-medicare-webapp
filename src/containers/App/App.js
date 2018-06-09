import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import styled from 'styled-components';
import { Home, Header, Footer, TermsAndConditions, PrivacyPolicy } from "../";
import DashboardTemplate from "../DashboardTemplate/DashboardTemplate";

const PageContainer = styled.div`
    width: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
    height: 100%;
`;

const ContentContainer = styled.div`
    width: 100%;
    overflow-y: auto;
    height: 100%;
    display: flex nowrap;
`;

class App extends Component {
  render() {
    return (
      <PageContainer className="app">
        <Header/>
        <ContentContainer>
          <DashboardTemplate/>
        </ContentContainer>
        <Footer/>
      </PageContainer>
    );
  }
}


export default App;