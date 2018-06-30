import React, { Component } from "react";
import styled from 'styled-components';
import background from '../../resources/landing1.jpg';
import SignIn from "../../components/RegisterationLogin/SignInPage";
import {Link} from "react-router-dom";

const PageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  position: fixed;
`;

const LoginContainer = styled.div`
  display: flex row;
  z-index: 10;
  width: 50%;
  height: 80%;
  margin: auto;
`;

const Background = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0px;
  top: 0px;
  overflow-x: hidden;
  overflow-y: hidden;
    
  -webkit-filter: blur(4px); 
  -moz-filter: blur(4px);
  -ms-filter: blur(4px); 
  -o-filter: blur(4px);
    
  transition: 1s filter linear;
  -webkit-transition: 0.3s -webkit-filter linear;
  -moz-transition: 0.3s -moz-filter linear;
  -ms-transition: 0.3s -ms-filter linear;
  -o-transition: 0.3s -o-filter linear;
    
  &:hover {
    -webkit-filter: blur(1px); 
    -moz-filter: blur(1px);
    -ms-filter: blur(1px); 
    -o-filter: blur(1px); 
  }
`;

const Title = styled.h1`
  z-index: 10;
  font-size: 60px;
  font-weight: bold;
  color: #fff;
  text-shadow: 0 1px 4px #000;
  margin: auto;
  text-align: center;
`;

const ButtonContainer = styled.div`
  position: fixed;
  z-index: 10;
  width: 150px;
  height: 40px;
  right: 10%;
  top: 80%;
`;

const GoBackButton = styled(Link)`
  -webkit-order: 3;
  -ms-flex-order: 3;
  border-radius: 5px;
  text-decoration: none;
  color: #fff;
  background-color: #55acee;
  box-shadow: 0px 5px 0px 0px #3C93D5;
  margin: 0;
  padding: 10px 25px;
  
  &:active {
    transform: translate(0px, 2px);
    -webkit-transform: translate(0px, 2px);
    box-shadow: 0px 1px 0px 0px;
  }
  
  &:hover {
    background-color: #6FC6FF;
    cursor: pointer;
  }
`;

class LoginFromLandingPage extends Component {
  render() {
    return (
      <PageContainer>
        <Background src={background} alt="MediCare Landing Page" />
        <LoginContainer>
          <Title>MediCare</Title>
          <SignIn />
        </LoginContainer>

        <ButtonContainer>
          <GoBackButton to="/">Go Back</GoBackButton>
        </ButtonContainer>
      </PageContainer>
    );
  }
}

export default LoginFromLandingPage;