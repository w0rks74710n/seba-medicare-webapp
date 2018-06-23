import React, { Component } from 'react';
import edit from '../../resources/edit-profile.png';
import change from '../../resources/change-password.png';
import logout from '../../resources/logout.png';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ColorPalette from '../../constants/ColorPalette'

const HeaderDiv = styled.div`
  overflow-x: hidden;
  overflow-y: hidden;
  padding: 5px;
	background: #23282e;
  height: 59px;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;	
`;

const Dropdown = styled.li`
  display: block;
  text-decoration: none;  
  margin:auto; 
  margin-right: 74px;
`;

const DropdownToggle = styled.a`
  text-align: center;
  display: block;
  text-decoration: none;  
  color: #e1ffff;
  margin-left: 20px;
    
  &:hover .dropdown-content {display: block;}
`;

const DropdownMenu = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 0px;
  line-height: 2rem;
  cursor: pointer;
  visibility: visible !important;
  
  display: block;
  position: absolute;
  margin-top: 20px;
  border: 1px solid rgba(0,0,0,.15);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  background-color: #fff;
  -webkit-box-shadow: 0 6px 12px rgba(0,0,0,.175);
  box-shadow: 0 6px 12px rgba(0,0,0,.175);
`;

const DropdownListItem = styled.li`
  width: 300px;
  margin-left: 0px;
  text-decoration: none;  
  padding: 12px; 
  
  &:hover {
    background-color: #f0f0f0;
    -webkit-transition: all .6s ease;
    -moz-transition: all .6s ease;
    -o-transition: all .6s ease;
    -ms-transition: all .6s ease;
    transition: all .6s ease;
	}	
`;

const StyledLink = styled(Link)`
  text-decoration: none;  
  color: black;
`;

const Icon = styled.img`
  width: 40px;
  display: inline-block;
  vertical-align: middle;
  padding-left: 6px;
  padding-right: 6px;
`;

class DashboardHeader extends Component {
  render() {
    return (
      <HeaderDiv>
        <Dropdown>
          <DropdownToggle className="dropbtn">Admin Menu</DropdownToggle>
          <DropdownMenu className="dropdown-content">
            <StyledLink to="/edit">
             <DropdownListItem>
                <Icon src={edit} alt="Edit Profile"/>Edit
             </DropdownListItem>
            </StyledLink>

            <StyledLink to="/change">
              <DropdownListItem>
                <Icon src={change} alt="Change Password" />Change
              </DropdownListItem>
            </StyledLink>

            <StyledLink to="/logout">
              <DropdownListItem>
                <Icon src={logout} alt="Logout" />Logout
              </DropdownListItem>
            </StyledLink>
          </DropdownMenu>
        </Dropdown>
      </HeaderDiv>
    );
  }
}

export default DashboardHeader;
