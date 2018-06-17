import React, { Component } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { FilterSidebar, PrivacyPolicy, TermsAndConditions } from "../";
import PatientRegisterationForm from "../../components/Registeration/PatientRegisterationForm";
import DoctorRegisterationForm from "../../components/Registeration/DoctorRegisterationForm";

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
          <Route path={"/"} component={FilterSidebar} />
          <Route path={"/home"} component={FilterSidebar} />
          <Route path={"/register"} component={PatientRegisterationForm} />
          <Route path={"/join-us-as-a-doctor"} component={DoctorRegisterationForm} />
          <Route path={"/privacy-policy"} component={PrivacyPolicy} />
          <Route path={"/terms-and-conditions"} component={TermsAndConditions} />
        </Switch>
      </ContentContainer>
    );
  }
}

export default HomeContent