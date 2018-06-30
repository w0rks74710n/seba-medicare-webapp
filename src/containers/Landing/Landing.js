import React, { Component } from "react";
import styled from 'styled-components';
import LandingPage from "../../components/LandingPage/LandingPage";

const PageContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  height: 100%;
`;

class Landing extends Component {
  render() {
    return (
      <PageContainer>
        <LandingPage/>
      </PageContainer>
    );
  }
}

export default Landing;