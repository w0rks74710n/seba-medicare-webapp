import React, { Component } from "react";
import styled from 'styled-components';
import background from '../../resources/landing1.jpg';

const PageContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
    position: fixed;
`;

const Background = styled.img`
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
    
    -webkit-filter: blur(1px); 
    -moz-filter: blur(1px);
    -ms-filter: blur(1px); 
    -o-filter: blur(1px); 
    
    transition: 1s filter linear;
    -webkit-transition: 0.3s -webkit-filter linear;
    -moz-transition: 0.3s -moz-filter linear;
    -ms-transition: 0.3s -ms-filter linear;
    -o-transition: 0.3s -o-filter linear;
    
    &:hover {
      -webkit-filter: blur(4px); 
      -moz-filter: blur(4px);
      -ms-filter: blur(4px); 
      -o-filter: blur(4px);
    }
`;

class LandingPage extends Component {
  render() {
    return (
      <PageContainer>
        <Background src={background} alt="MediCare Landing Page" />
      </PageContainer>
    );
  }
}

export default LandingPage;