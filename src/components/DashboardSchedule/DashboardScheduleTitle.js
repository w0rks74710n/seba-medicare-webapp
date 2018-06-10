import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ColorPalette from '../../constants/ColorPalette'

const ScheduleTitle = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: ${ ColorPalette.primaryDark };
  margin: auto;
  margin-top: 20px;
`;

class DashboardScheduleTitle extends Component {
  render() {
    return (
      <ScheduleTitle>Manage Schedule</ScheduleTitle>
    );
  }
}

export default DashboardScheduleTitle;
