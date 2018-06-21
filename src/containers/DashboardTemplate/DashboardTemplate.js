import React, { Component } from 'react';
import styled from 'styled-components';
import { Route } from "react-router-dom";
import DashboardHeader from "../../components/DashboardTemplate/DashboardHeader";
import DashboardSideBar from "../../components/DashboardTemplate/DashboardSideBar";
import DashboardSchedule from "../DashboardSchedule/DashboardSchedule";
import CustomizeDoctorProfile from "../CustomizeDoctorProfile/CustomizeDoctorProfile";

const ContainerDiv = styled.div`
  display: flex;
  flex-flow: column nowrap;		
`;

const ContentsDiv = styled.div`
  display: flex;
  flex-flow: row nowrap;		
`;

const Content = styled.div`
  margin-left: 240px;
`;

class DashboardTemplate extends Component {
  render() {
    return (

      <ContainerDiv>
        <DashboardHeader/>
        <ContentsDiv>
          <DashboardSideBar/>
          <Content>
            <Route exact path="/dashboard/customizeProfile/:id" component={CustomizeDoctorProfile} />
            <Route exact path="/dashboard/schedule/:id" component={DashboardSchedule} />
          </Content>
        </ContentsDiv>
      </ContainerDiv>
    );
  }
}

export default DashboardTemplate;
