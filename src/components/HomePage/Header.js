import React, { Component } from 'react';
import logo from '../../resources/medicare_logo.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import ColorPalette from '../../constants/ColorPalette'

const HeaderDiv = styled.div`
	border-bottom: 1px solid black;
  padding: 5px;
	background: ${ ColorPalette.primary };
  height: auto;
  width: 100%;		
  display: flex;
  flex-flow: row nowrap;		
`;

const Header_Logo = styled.img`
  margin: auto;
  margin-left: 40px;  
  height: 50px;
	order: 1;
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

const ButtonLink = styled(Link)`
  text-decoration: none;
	font-style: normal;
  font-size: 11px;
	color: black;
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

const Header_Button1 = styled.button`    
	order: 2;
	margin: auto;
	margin-right: 80px;
  height: 30px;
  width: 100px;
`;

const Header_Button2 = styled.button`    
	order: 4;
	margin: auto;
	margin-right: 80px;
  height: 30px;
  width: 100px;
`;

class Header extends Component {
  render() {
    return (
      <HeaderDiv>
        <Header_Logo src={logo} alt="MediCare_Logo" />

        <Header_Button1>
          <ButtonLink to="/join-us-as-a-doctor">Join As a Doctor</ButtonLink>
        </Header_Button1>

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
              <StyledLink to="/join">Join</StyledLink>
            </Header_Horizontal_Navigation_Item>
            <Header_Horizontal_Navigation_Item>
              <StyledLink to="/language">EN</StyledLink>
            </Header_Horizontal_Navigation_Item>
          </HeaderHorizontalNavigationList>
        </Header_Horizontal_Navigation>

        <Header_Button2>
          <ButtonLink to="/register">Login/Sign up</ButtonLink>
        </Header_Button2>

      </HeaderDiv>
    );
  }
}

export default Header;
