import React, { Component } from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import {
  SearchDoctor,
  DoctorProfile,
  PrivacyPolicy,
  TermsAndConditions
} from "../";

import PatientSignUp from "../../components/RegisterationLogin/PatientSignUpPage";
import SignIn from "../../components/RegisterationLogin/SignInPage";
import SignUp from "../../components/RegisterationLogin/DoctorSignUpPage";
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

          <Route path={"/patient-sign-up"} component={PatientSignUp} />
          <Route path={"/doctor-sign-up"} component={SignUp} />
          <Route path={"/sign-in"} component={SignIn} />
          <Route path={"/password-forget"} component={PasswordForget} />

          <Route path={"/doctor-profile/:id"} component = {DoctorProfile}/>
          <Route path={"/privacy-policy"} component={PrivacyPolicy} />
          <Route path={"/terms-and-conditions"} component={TermsAndConditions} />
        </Switch>
      </ContentContainer>
    );
  }
}

export default HomeContent
