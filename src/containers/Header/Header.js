import React, { Component } from 'react';
import logo from '../../resources/logo1.png';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const HeaderDiv = styled.div`
	border-bottom: 1px solid black;
    padding: 5px;
	background: -webkit-linear-gradient(45deg, #f5fafd, #bdf9d3);
	
    height: auto;
    width: 100%;		
    display: flex;
    flex-flow: row nowrap;		
`;

const Header_Logo = styled.img`
    margin-left: 40px;
    height: 80px;
    width: 300px;
	order: 1;
`;

const StyledLink = styled(Link)`
    text-decoration: none;

    font-famiy: Calibri Light;
	font-style: normal;
    font-size: 20px;
	color: #424242;
	
	&:hover {
        color: #ea7c41;
	}	
`;

const Header_Horizontal_Navigation = styled.nav`
	order: 2;
	margin: auto;
`;

const Header_Horizontal_Navigation_Item = styled.li`
	display: inline-block;	
	list-style: none;	
	text-decoration: none;
	
	padding: 5px;	
	padding-left: 30px;
	
	font-famiy: Calibri Light;
	font-style: normal;
    font-size: 20px;
	color: #424242;
	
	&:hover {
        color: #ea7c41;
	}	
`;

const Header_Button = styled.button`    
	order: 3;
	margin: auto;
	margin-right: 80px;
    height: 30px;
    width: 100px;
`;

class Header extends Component {
    render() {
        return (
            <Router>
                <HeaderDiv>
                    <Header_Logo src={logo} alt="MediCare_Logo" />
                    <Header_Horizontal_Navigation>
                        <ul>
                            <Header_Horizontal_Navigation_Item><StyledLink to="/home">Home</StyledLink></Header_Horizontal_Navigation_Item>
                            <Header_Horizontal_Navigation_Item><StyledLink to="/about">About</StyledLink></Header_Horizontal_Navigation_Item>
                            <Header_Horizontal_Navigation_Item><StyledLink to="/contact">Contact</StyledLink></Header_Horizontal_Navigation_Item>
                            <Header_Horizontal_Navigation_Item><StyledLink to="/join">Join</StyledLink></Header_Horizontal_Navigation_Item>
                            <Header_Horizontal_Navigation_Item><StyledLink to="/language">EN</StyledLink></Header_Horizontal_Navigation_Item>
                        </ul>
                    </Header_Horizontal_Navigation>
                    <Header_Button id="contact_button"
                            onClick="location.href='mailto: san-pi@windowslive.com';">Login/Sign up
                    </Header_Button>
                </HeaderDiv>
            </Router>
        );
    }
}

export default Header;
