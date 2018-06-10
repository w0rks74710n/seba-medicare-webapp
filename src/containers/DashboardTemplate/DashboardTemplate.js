import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ColorPalette from '../../constants/ColorPalette'
import DashboardContents from "../../components/DashboardTemplate/DashboardContents";
import DashboardHeader from "../../components/DashboardTemplate/DashboardHeader";
import DashboardSideBar from "../../components/DashboardTemplate/DashboardSideBar";

const ContainerDiv = styled.div`
  display: flex;
  flex-flow: column nowrap;		
`;

const ContentsDiv = styled.div`
  display: flex;
  flex-flow: row nowrap;		
`;

class DashboardTemplate extends Component {
  render() {
    return (
      <Router>
        <ContainerDiv>
          <DashboardHeader/>
          <ContentsDiv>
            <DashboardSideBar/>
            <DashboardContents/>
          </ContentsDiv>
        </ContainerDiv>
      </Router>
    );
  }
}

export default DashboardTemplate;
