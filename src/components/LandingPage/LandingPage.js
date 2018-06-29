import React, { Component } from "react";
import styled from 'styled-components';
import background from '../../resources/landing1.jpg';
import {Link} from "react-router-dom";
import ColorPalette from "../../constants/ColorPalette";

const PageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  position: fixed;
`;

const SearchContainer = styled.div`
  display: flex row;
  z-index: 10;
  width: 50%;
  height: 30%;
  margin: auto;
`;

const ButtonContainer = styled.div`
  position: fixed;
  z-index: 10;
  width: 150px;
  height: 40px;
  right: 10%;
  top: 80%;
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

const Search = styled.div`  
  display: flex;
  z-index: 10;
  margin: auto;
  margin-top: 50px;
  margin-left: 100px;
`;

const SignInButton = styled(Link)`
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

const TermsContainer = styled.div`  
  position: fixed;
  z-index: 10;
  width: 20%;
  height: 40px;
  left: 40%;
  top: 80%;
`;

const Paragraph = styled.p`
  text-align: justify;		
  text-justify: inter-word;
    
  font-famiy: Calibri Light;
	font-style: normal;
  font-size: 18px;
	color: #424242;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${ ColorPalette.primary };
  
  &:hover {
    font-style: italic;
    color: ${ ColorPalette.accent };
	}	
`;

const Input = styled.input`
  width: 50%;
  height: 50px;
  box-shadow: 1px 2px #999999;
  border: 1px solid black;
  border-radius: 15px;;
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
  
  &:focus {
    width: 80%;
  }
  
  &::placeholder {
    font-size: 16px;
    font-style: italic;
    color: #424242;
    margin: auto;
    padding-left: 20px;
  }
  
  &:[type=text]{
    font-size: 16px;
    font-style: italic;
    color: #424242;
    margin: auto;
    padding-left: 20px;
  }
`;

class LandingPage extends Component {
  render() {
    return (
      <PageContainer>
        <Background src={background} alt="MediCare Landing Page" />
        <SearchContainer>
          <Title>MediCare</Title>
          <Search>
            <Input type="text" name="search" placeholder="Search for doctor.."/>
          </Search>
        </SearchContainer>
        <ButtonContainer>
          <SignInButton to="/login">Login/Sign up</SignInButton>
        </ButtonContainer>

        <TermsContainer>
          <Paragraph>What is this all <NavLink to={""}>about?</NavLink> and <NavLink to={""}>Contact</NavLink></Paragraph>
        </TermsContainer>
      </PageContainer>
    );
  }
}

export default LandingPage;