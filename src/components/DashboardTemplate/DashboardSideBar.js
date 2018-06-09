import React, { Component } from 'react';
import logo from '../../resources/medicare_logo.png';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ColorPalette from '../../constants/ColorPalette'

const SideBar = styled.div`
  height: 100%;
  width: auto;
  top: 0;
  left: 0;
  background-color: ${ ColorPalette.primaryDark };
`;

const Logo = styled.img`
  text-align: left !important;
  font-size: 22px;
  padding-left: 20px;
  line-height: 50px !important;
`;

class DashboardSideBar extends Component {
  render() {
    return (
      <Router>
        <SideBar>
          <div className="nav-side-menu">
            <Logo src={logo} alt="MediCare_Logo" />
            <i className="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>

            <div className="menu-list">

              <ul id="menu-content" className="menu-content collapse out">
                <li>
                  <a href="#"><i className="fa fa-dashboard fa-lg fa-fw sidebar-icon"></i> Dashboard</a>
                </li>

                <li>
                  <a href="#"><i className="fa fa-calendar fa-lg fa-fw sidebar-icon"></i> Scheduler</a>
                </li>

                <li>
                  <a href="#"><i className="fa fa-bar-chart fa-lg fa-fw sidebar-icon"></i> Statistics</a>
                </li>

                <li data-toggle="collapse" data-target="#manage" className="collapsed">
                  <a href="#"><i className="fa fa-puzzle-piece fa-lg fa-fw sidebar-icon"></i> Manage <span
                    className="arrow"></span></a>
                </li>
                <ul className="sub-menu collapse" id="manage">
                  <li><a href="#"><i className="fa fa-angle-double-right"></i> Devices</a></li>
                  <li><a href="#"><i className="fa fa-angle-double-right"></i> Groups</a></li>
                  <li><a href="#"><i className="fa fa-angle-double-right"></i> SIM Cards</a></li>
                  <li><a href="#"><i className="fa fa-angle-double-right"></i> Users</a></li>
                </ul>

                <li data-toggle="collapse" data-target="#settings" className="collapsed">
                  <a href="#"><i className="fa fa-sliders fa-lg fa-fw sidebar-icon"></i> Settings <span
                    className="arrow"></span></a>
                </li>
                <ul className="sub-menu collapse" id="settings">
                  <li><a href="#"><i className="fa fa-angle-double-right"></i> General</a></li>
                  <li><a href="#"><i className="fa fa-angle-double-right"></i> Security</a></li>
                  <li><a href="#"><i className="fa fa-angle-double-right"></i> Notifications</a></li>
                </ul>

                <li data-toggle="collapse" data-target="#maintenance" className="collapsed">
                  <a href="#"><i className="fa fa-cogs fa-lg fa-fw sidebar-icon"></i> Maintenance <span
                    className="arrow"></span></a>
                </li>
                <ul className="sub-menu collapse" id="maintenance">
                  <li><a href="#"><i className="fa fa-angle-double-right"></i> Operation Logs</a></li>
                  <li><a href="#"><i className="fa fa-angle-double-right"></i> Events and Alarms</a></li>
                  <li><a href="#"><i className="fa fa-angle-double-right"></i> Backup and Restore</a></li>
                </ul>

                <li data-toggle="collapse" data-target="#tools" className="collapsed">
                  <a href="#"><i className="fa fa-wrench fa-lg fa-fw sidebar-icon"></i> Tools <span
                    className="arrow"></span></a>
                </li>
                <ul className="sub-menu collapse" id="tools">
                  <li><a href="#"><i className="fa fa-angle-double-right"></i> Manual SMS</a></li>
                  <li><a href="#"><i className="fa fa-angle-double-right"></i> Import</a></li>
                  <li><a href="#"><i className="fa fa-angle-double-right"></i> Export</a></li>
                </ul>

                <li data-toggle="collapse" data-target="#help" className="collapsed">
                  <a href="#"><i className="fa fa-life-ring fa-lg fa-fw sidebar-icon"></i> Help <span
                    className="arrow"></span></a>
                </li>
                <ul className="sub-menu collapse" id="help">
                  <li><a href="#"><i className="fa fa-angle-double-right"></i> Documentation</a></li>
                  <li><a href="#"><i className="fa fa-angle-double-right"></i> Customer Support <small><i
                    className="fa fa-external-link"></i></small></a></li>
                </ul>
              </ul>
            </div>
          </div>
        </SideBar>
      </Router>
    );
  }
}

export default DashboardSideBar;
