import React, { Component } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { FilterSidebar, PrivacyPolicy, TermsAndConditions } from "../";
import SignIn from "../../components/RegisterationLogin/SignIn";

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
          <Route exact path={"/"} component={FilterSidebar} />
          <Route path={"/home"} component={FilterSidebar} />
          <Route path={"/register"} component={SignIn} />
          <Route path={"/join-us-as-a-doctor"} component={} />
          <Route path={"/privacy-policy"} component={PrivacyPolicy} />
          <Route path={"/terms-and-conditions"} component={TermsAndConditions} />
        </Switch>
      </ContentContainer>
    );
  }
}

export default HomeContent