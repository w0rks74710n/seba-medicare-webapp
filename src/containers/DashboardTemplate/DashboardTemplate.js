import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ColorPalette from '../../constants/ColorPalette'
import DashboardContents from "../../components/DashboardTemplate/DashboardContents";
import DashboardHeader from "../../components/DashboardTemplate/DashboardHeader";
import DashboardSideBar from "../../components/DashboardTemplate/DashboardSideBar";

class DashboardTemplate extends Component {
  render() {
    return (
      <Router>
        <div>
          <DashboardHeader/>
          <DashboardSideBar/>
          <DashboardContents/>
        </div>
      </Router>
    );
  }
}

export default DashboardTemplate;
