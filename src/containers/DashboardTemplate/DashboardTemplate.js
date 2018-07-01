import React, { Component } from 'react';
import styled from 'styled-components';
import DashboardHeader from "../../components/DashboardTemplate/DashboardHeader";
import DashboardSideBar from "../../components/DashboardTemplate/DashboardSideBar";
import DashboardContent from "./DashboardContent";

const ContainerDiv = styled.div`
  display: flex;
  flex-flow: column nowrap;	
  overflow-y: auto;
  overflow-x: hidden;
`;

const ContentsDiv = styled.div`
  display: flex;
  flex-flow: row nowrap;		
  overflow-y: auto;
  overflow-x: hidden;
`;

const Content = styled.div`
  margin-left: 240px;
  overflow-y: auto;
  overflow-x: hidden;
`;

class DashboardTemplate extends Component {
  render() {
    return (
      <ContainerDiv>
        <DashboardHeader/>
        <ContentsDiv>
          <DashboardSideBar/>
          <Content>
            <DashboardContent/>
          </Content>
        </ContentsDiv>
      </ContainerDiv>
    );
  }
}

export default DashboardTemplate;
