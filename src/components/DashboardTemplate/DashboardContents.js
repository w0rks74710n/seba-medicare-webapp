import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ColorPalette from '../../constants/ColorPalette'
import CustomizeDoctorProfile from '../../containers/CustomizeDoctorProfile/CustomizeDoctorProfile'

const Contents = styled.div`
  margin-left: 220px;
  padding: 15px;
`;

class DashboardContents extends Component {
  render() {
    return (
      <Router>
        <Contents>
          <CustomizeDoctorProfile />
        </Contents>
      </Router>
    );
  }
}

export default DashboardContents;
