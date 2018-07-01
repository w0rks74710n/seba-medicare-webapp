import React, { Component } from 'react';
import logo from '../../resources/medicare_logo.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ColorPalette from '../../constants/ColorPalette';
import SignOutButton from '../RegisterationLogin/SignOutButton'

const HeaderDiv = styled.div`
	background: ${ ColorPalette.primary };
  height: 50px;
  width: 100%;		
  display: flex;
  flex-flow: row nowrap;		
`;

const Header_Logo = styled.img`
  margin-left: 40px;  
  height: 40px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
	font-style: normal;
  font-size: 20px;
	color: ${ ColorPalette.primaryNavigationText };

	&:hover {
    color: ${ ColorPalette.linksHover };
	}
`;

const Header_Horizontal_Navigation = styled.nav`
	order: 2;
	margin: auto;
`;

const HeaderHorizontalNavigationList = styled.ul`
  margin: 0;
`;

const Header_Horizontal_Navigation_Item = styled.li`
	display: inline-block;	
	list-style: none;	
	text-decoration: none;
	padding: 5px;	
	padding-left: 30px;
	font-style: normal;
  font-size: 20px;
	color: ${ ColorPalette.primaryNavigationText };
	
	&:hover {
    color: ${ ColorPalette.linksHover };
	}	
`;

const Header_Button = styled.button`    
	margin-right: 80px;
  height: 35px;
  width: 120px;
  font-size: 13px;
  border-radius: 15px;
  
  &:hover {
    background-color: ${ ColorPalette.linksHover };
	}	
`;

const ButtonLink0 = styled(Link)`
	order: 1;
	margin: auto;
`;

const ButtonLink2 = styled(Link)`
	order: 4;
	margin: auto;
  text-decoration: none;
	font-style: normal;
	color: black;
`;

const SignInButton = styled(Link)`
  -webkit-order: 3;
  -ms-flex-order: 3;
  order: 3;
  border-radius: 5px;
  padding: 5px 20px;
  margin: 12px;
  text-decoration: none;
  color: #fff;
  background-color: #55acee;
  box-shadow: 0px 5px 0px 0px #3C93D5;
  
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

class Header extends Component {
  render() {
    return (
      <HeaderDiv>
        <ButtonLink0 to="/home">
          <Header_Logo src={logo} alt="MediCare_Logo" />
        </ButtonLink0>

        <Header_Horizontal_Navigation>
          <HeaderHorizontalNavigationList>
            <Header_Horizontal_Navigation_Item>
              <StyledLink to="/home">Home</StyledLink>
            </Header_Horizontal_Navigation_Item>
            <Header_Horizontal_Navigation_Item>
              <StyledLink to="/about">About</StyledLink>
            </Header_Horizontal_Navigation_Item>
            <Header_Horizontal_Navigation_Item>
              <StyledLink to="/contact">Contact</StyledLink>
            </Header_Horizontal_Navigation_Item>
            <Header_Horizontal_Navigation_Item>
              <StyledLink to="/doctor-sign-up">Join Medicare</StyledLink>
            </Header_Horizontal_Navigation_Item>
          </HeaderHorizontalNavigationList>
        </Header_Horizontal_Navigation>

        {window.localStorage['jwtToken'] === undefined &&
          <SignInButton to="/login">
              Login/Sign up
          </SignInButton>
        }
        {window.localStorage['jwtToken'] !== undefined &&
          <SignOutButton />
        }

      </HeaderDiv>
    );
  }
}

export default Header;
