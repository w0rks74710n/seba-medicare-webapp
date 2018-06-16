import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import styled from 'styled-components';
import { Home, Header, Footer, TermsAndConditions, PrivacyPolicy, DashboardTemplate } from "../";

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
        <ContentContainer>
          <Switch>
            <Route exact path="/terms-and-conditions" component = { TermsAndConditions }/>
            <Route exact path="/privacy-policy" component = { PrivacyPolicy }/>
            <Route exact path="/dashboard" component = {DashboardTemplate}/>
            <Route exact path="/" component = { Home }/>
          </Switch>
        </ContentContainer>
      </PageContainer>
    );
  }
}


export default App;