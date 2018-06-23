import React, { Component } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DashboardSchedule from "../DashboardSchedule/DashboardSchedule";

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
          <Route exact path={"/dashboard"} component={DashboardSchedule} />
          <Route path={"/manage-schedule"} component={DashboardSchedule} />
          <Route path={"/edit-profile"} component={DashboardSchedule} />
          <Route path={"/change-settings"} component={DashboardSchedule} />
          <Route path={"/logout"} component={DashboardSchedule} />
        </Switch>
      </ContentContainer>
    );
  }
}

export default DashboardContent