import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ColorPalette from '../../constants/ColorPalette'

const HeaderDiv = styled.div`
  height: auto;
  width: 100%;
  top: 0;
  left: 0;
  background-color: ${ ColorPalette.primaryDark };
`;

class DashboardHeader extends Component {
  render() {
    return (
      <Router>
        <HeaderDiv>

        </HeaderDiv>
      </Router>
    );
  }
}

export default DashboardHeader;
