import React, { Component } from 'react';
import logo from '../../resources/medicare_logo.png';
import manage from '../../resources/manage.png';
import settings from '../../resources/settings.png';
import help from '../../resources/help.png';
import dashboard from '../../resources/dashboard.png';
import schedule from '../../resources/schedule.png';
import statistics from '../../resources/statistics.png';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const SideBar = styled.div`
  margin: 0px;
  padding: 0px;
  background-color: #ebedef;
`;

const NavSideMenu = styled.div`
  overflow-x: hidden;
  background-color: #2e353d;
  position: fixed;
  top: 0px;
  width: 220px;
  height: 100%;
  color: #e1ffff;
`;

const Logo = styled.img`
  background-color: #23282e;
  display: block;
  text-align: center;
  margin: auto; 
  padding: 10px; 
  width: 100%;
`;

const ToggleBtn = styled.i`
  display: none;
`;

const MenuList = styled.div`

`;

const NavSideMenuUL = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 0px;
  line-height: 4rem;
  cursor: pointer;
  visibility: visible !important;
  
`;

const NavSideMenuLI = styled.li`
  padding-left: 0px;
  border-left: 3px solid #2e353d;
  border-bottom: 1px solid #23282e;
  display: flex;
  
  &:active {
    border-left: 3px solid #e1ffff;
    background-color: #4f5b69;
	}
	
	&:hover {
    border-left: 3px solid #e1ffff;
    background-color: #4f5b69;
    -webkit-transition: all .6s ease;
    -moz-transition: all .6s ease;
    -o-transition: all .6s ease;
    -ms-transition: all .6s ease;
    transition: all .6s ease;
	}	
`;

const ListItemA = styled.a`
  text-align: center;
  display: block;
  text-decoration: none;
  color: #e1ffff;
`;

const Icon = styled.img`
  width: 50px;
  display: inline-block;
  vertical-align: middle;
  padding-left: 10px;
  padding-right: 10px;
`;

class DashboardSideBar extends Component {
  componentDidMount () {
    const script1 = document.createElement("script");
    script1.src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js";
    script1.async = true;
    const script2 = document.createElement("script");
    script2.src="//code.jquery.com/jquery-1.11.1.min.js";
    script2.async = true;

    document.body.appendChild(script1);
    document.body.appendChild(script2);
  }

  render() {
    return (
      <Router>
        <SideBar>
          <NavSideMenu>
            <Logo src={logo} alt="MediCare_Logo" />
            <ToggleBtn data-toggle="collapse" data-target="#menu-content"></ToggleBtn>

            <MenuList>
              <NavSideMenuUL id="menu-content" className="menu-content collapse out">
                <NavSideMenuLI>
                  <ListItemA href="#"><Icon src={dashboard} alt="Dashboard" /> Dashboard</ListItemA>
                </NavSideMenuLI>

                <NavSideMenuLI>
                  <ListItemA href="#"><Icon src={schedule} alt="Schedule" /> Schedule</ListItemA>
                </NavSideMenuLI>

                <NavSideMenuLI>
                  <ListItemA href="#"><Icon src={statistics} alt="Statistics" /> Statistics</ListItemA>
                </NavSideMenuLI>

                <NavSideMenuLI data-toggle="collapse" data-target="#manage" className="collapsed">
                  <ListItemA href="#"><Icon src={manage} alt="Manage" /> Manage</ListItemA>
                </NavSideMenuLI>

                <NavSideMenuLI data-toggle="collapse" data-target="#settings" className="collapsed">
                  <ListItemA href="#"><Icon src={settings} alt="Settings" /> Settings</ListItemA>
                </NavSideMenuLI>

                <NavSideMenuLI data-toggle="collapse" data-target="#maintenance" className="collapsed">
                  <ListItemA href="#"><Icon src={help} alt="Help" /> Help</ListItemA>
                </NavSideMenuLI>
              </NavSideMenuUL>

            </MenuList>
          </NavSideMenu>
        </SideBar>
      </Router>
    );
  }
}

export default DashboardSideBar;
