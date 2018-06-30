import React, { Component } from "react";
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, DashboardTemplate, Landing, LoginFromLandingPage, RegisterFromLandingPage } from "../";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path={"/home"} component = {Home}/>
          <Route path={"/dashboard"} component = {DashboardTemplate}/>
          <Route path={"/login"} component={LoginFromLandingPage} />
          <Route path={"/patient-sign-up"} component={RegisterFromLandingPage} />
          <Route exact path={"/"} component = {Landing}/>
          <Route path={"/"} component = {Home}/>
        </Switch>
      </Router>
    );
  }
}

export default App;