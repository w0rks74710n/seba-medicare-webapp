import React, { Component } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DashboardSchedule from "../DashboardSchedule/DashboardSchedule";
import DashboardLogout from "../DashboardLogout/DashboardLogout";
import DashboardInfo from "../DashboardInfo/DashboardInfo";
import CustomizeDoctorProfile from "../CustomizeDoctorProfile/CustomizeDoctorProfile";
import DoctorProfile from "../DoctorProfile/DoctorProfile";

const ContentContainer = styled.div`
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
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
          <Route path="/doctor-profile/:id" component={DoctorProfile} />
          <Route path="/dashboard/logout" component={DashboardLogout} />
          <Route path="/dashboard/" component={DashboardInfo} />
        </Switch>
      </ContentContainer>
    );
  }
}

export default DashboardContent