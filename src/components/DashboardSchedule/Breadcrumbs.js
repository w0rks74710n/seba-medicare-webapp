import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ColorPalette from '../../constants/ColorPalette'

const BreadcrumbsDiv = styled.div`    
  font-size: 14px;
  display: flex;
  flex-flow: row nowrap;		
  margin: 20px 10px 20px 10px;
  font-weight: bold;
  color: ${ ColorPalette.primaryDark };
`;

const NavLink = styled(Link)`
  font-size: 14px;
  margin: auto;
  margin-left: 10px;
  text-decoration: none;
  color: ${ ColorPalette.primary };
  
  &:hover {
    font-style: italic;
    color: ${ ColorPalette.accent };
	}	
`;

const Divider = styled.p`
  font-size: 14px;
  margin: auto;
  margin-left: 10px;
  text-decoration: none;
  color: ${ ColorPalette.primary };
`;

class Breadcrumbs extends Component {
  render() {
    return (
      <BreadcrumbsDiv>You are here:
        <NavLink to="/home">Home</NavLink>
        <Divider>|</Divider>
        <NavLink to="/profile">Profile</NavLink>
        <Divider>|</Divider>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <Divider>|</Divider>
        <NavLink to="/manage-schedule">Manage Schedule</NavLink>
      </BreadcrumbsDiv>
    );
  }
}

export default Breadcrumbs;
