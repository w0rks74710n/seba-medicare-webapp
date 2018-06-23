import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ColorPalette from '../../constants/ColorPalette'
import DashboardHeader from "../../components/DashboardTemplate/DashboardHeader";
import DashboardSideBar from "../../components/DashboardTemplate/DashboardSideBar";
import DashboardContent from "./DashboardContent";

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
      <Router>
        <ContainerDiv>

          <DashboardHeader/>
          <ContentsDiv>
            <DashboardSideBar/>
            <Content>
              <DashboardContent/>
            </Content>
          </ContentsDiv>

        </ContainerDiv>
      </Router>
    );
  }
}

export default DashboardTemplate;
