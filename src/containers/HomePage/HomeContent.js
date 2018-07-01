import React, { Component } from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import {
  SearchDoctor,
  DoctorProfile,
  PrivacyPolicy,
  TermsAndConditions
} from "../";

import SignUp from "../../components/RegisterationLogin/DoctorSignUpPage";
import PasswordForget from "../../components/RegisterationLogin/PasswordForget";
import LoginFromLandingPage from "../Landing/LoginFromLandingPage";
import RegisterFromLandingPage from "../Landing/RegisterFromLandingPage";
import DoctorRegisterFromLandingPage from "../Landing/DoctorRegisterFromLandingPage";

const ContentContainer = styled.div`
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
    display: flex nowrap;
`;


class HomeContent extends Component {

  constructor(props){
    super(props);
    this.state = {
        doctorType: this.props.searchQueryForDoctor,
        place: this.props.searchQueryForPlace
    }
  }


  render() {
    return(
      <ContentContainer>
        <Switch>
          <Route exact path={"/"} render={(props) => <SearchDoctor searchQueryForDoctor={this.state.doctorType} searchQueryForPlace={this.state.place}/>}/>
          <Route path={"/home"} render={(props) => <SearchDoctor searchQueryForDoctor={this.state.doctorType} searchQueryForPlace={this.state.place}/>}/>

          <Route path={"/patient-sign-up"} component={RegisterFromLandingPage} />
          <Route path={"/doctor-sign-up"} component={DoctorRegisterFromLandingPage} />
          <Route path={"/login"} component={LoginFromLandingPage} />
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
