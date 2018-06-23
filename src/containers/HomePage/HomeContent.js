import React, { Component } from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import { 
  SearchDoctor, 
  DoctorProfile, 
  PrivacyPolicy, 
  TermsAndConditions 
} from "../";

import SignIn from "../../components/RegisterationLogin/SignIn";
import SignUp from "../../components/RegisterationLogin/SignUp";
import PasswordForget from "../../components/RegisterationLogin/PasswordForget";

const ContentContainer = styled.div`
    width: 100%;
    overflow-y: auto;
    height: 100%;
    display: flex nowrap;
`;

class HomeContent extends Component {
  render() {
    return(
      <ContentContainer>
        <Switch>
          <Route exact path={"/"} component={SearchDoctor} />
          <Route path={"/home"} component={SearchDoctor} />
          <Route path={"/register"} component={SignIn} />
          <Route path={"/sign-up"} component={SignUp} />
          <Route path={"/password-forget/:id"} component={PasswordForget} />
          <Route path={"/doctor-profile/:id"} component = {DoctorProfile}/>
          <Route path={"/join-us-as-a-doctor"} component={SignIn} />
          <Route path={"/privacy-policy"} component={PrivacyPolicy} />
          <Route path={"/terms-and-conditions"} component={TermsAndConditions} />
        </Switch>
      </ContentContainer>
    );
  }
}

export default HomeContent