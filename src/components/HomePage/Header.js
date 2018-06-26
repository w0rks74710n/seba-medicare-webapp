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
  margin-left: 40px;  
  height: 50px;
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

const ButtonLink1 = styled(Link)`
	order: 2;
	margin: auto;
  text-decoration: none;
	font-style: normal;
	color: black;
`;

const ButtonLink2 = styled(Link)`
	order: 4;
	margin: auto;
  text-decoration: none;
	font-style: normal;
	color: black;
`;

class Header extends Component {
  render() {
    return (
      <HeaderDiv>
        <ButtonLink0 to="/home">
          <Header_Logo src={logo} alt="MediCare_Logo" />
        </ButtonLink0>

        <ButtonLink1 to="/join-us-as-a-doctor">
          <Header_Button>
            Join As a Doctor
          </Header_Button>
        </ButtonLink1>

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
              <StyledLink to="/join-us-as-a-doctor">Join</StyledLink>
            </Header_Horizontal_Navigation_Item>
            <Header_Horizontal_Navigation_Item>
              <StyledLink to="/language">EN</StyledLink>
            </Header_Horizontal_Navigation_Item>
          </HeaderHorizontalNavigationList>
        </Header_Horizontal_Navigation>

        <ButtonLink2 to="/join-us-as-a-doctor">
          <Header_Button>
            Login/Sign up
          </Header_Button>
        </ButtonLink2>

      </HeaderDiv>
    );
  }
}

export default Header;
