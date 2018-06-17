import React, { Component } from "react";
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, DashboardTemplate } from "../";

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
      <Router>
        <Switch>
          <Route path="/" component = { Home }/>
          <Route path="/dashboard" component = {DashboardTemplate}/>
        </Switch>
      </Router>
    );
  }
}

export default App;