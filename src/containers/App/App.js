import React, { Component } from "react";
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { Home, DashboardTemplate, Landing, LoginFromLandingPage, RegisterFromLandingPage } from "../";
import HomeContent from "../HomePage/HomeContent";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path={"/home"} component = {Home}/>
          <AuthenticatedRoute path={"/dashboard"} component = {DashboardTemplate}/>
          <Route path={"/login"} component={HomeContent} />
          <Route path={"/patient-sign-up"} component={HomeContent} />
          <Route exact path={"/"} component = {Landing}/>
          <Route path={"/"} component = {Home}/>
        </Switch>
      </Router>
    );
  }
}

const AuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    localStorage.getItem('jwtToken') && localStorage.getItem('userType') === 'doctor' ? (
      <Component {...props}/>
    ) : localStorage.getItem('jwtToken') && localStorage.getItem('userType') === 'patient' ?
      (
        <Redirect to={{
          pathname: '/',
          state: { from: props.location }
        }}/>
      ) : (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }}/>
      )
  )}/>
);

export default App;