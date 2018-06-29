import React, { Component } from "react";
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, DashboardTemplate, Landing, LoginFromLandingPage, RegisterFromLandingPage } from "../";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/dashboard" component = {DashboardTemplate}/>
          <Route path="/home" component = {Home}/>
          <Route path={"/login"} component={LoginFromLandingPage} />
          <Route path={"/patient-sign-up"} component={RegisterFromLandingPage} />
          <Route path="/" component = {Landing}/>
        </Switch>
      </Router>
    );
  }
}

export default App;