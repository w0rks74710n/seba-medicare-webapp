import React, { Component } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DashboardSchedule from "../DashboardSchedule/DashboardSchedule";
import CustomizeDoctorProfile from "../CustomizeDoctorProfile/CustomizeDoctorProfile";

const ContentContainer = styled.div`
    width: 100%;
    overflow-y: auto;
    height: 100%;
    display: flex nowrap;
`;

class DashboardContent extends Component {
  render() {
    return(
      <ContentContainer>
        <Switch>
          <Route path={"/dashboard/manage-schedule/:id"} component={DashboardSchedule} />
          <Route path="/dashboard/customizeProfile/:id" component={CustomizeDoctorProfile} />
        </Switch>
      </ContentContainer>
    );
  }
}

export default DashboardContent