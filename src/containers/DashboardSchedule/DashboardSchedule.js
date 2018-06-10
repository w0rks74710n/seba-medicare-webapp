import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ColorPalette from '../../constants/ColorPalette'
import Breadcrumbs from "../../components/DashboardSchedule/Breadcrumbs";
import DashboardScheduleTitle from "../../components/DashboardSchedule/DashboardScheduleTitle";
import ScheduleOfAppoinments from "../../components/DashboardSchedule/ScheduleOfAppoinments";

const ContainerDiv = styled.div`
  display: flex;
  flex-flow: column nowrap;		
`;

class DashboardSchedule extends Component {
  render() {
    return (
      <Router>
        <ContainerDiv>
          <DashboardScheduleTitle/>
          <ScheduleOfAppoinments/>
          <Breadcrumbs/>
        </ContainerDiv>
      </Router>
    );
  }
}

export default DashboardSchedule;
