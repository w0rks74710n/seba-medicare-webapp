import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ColorPalette from '../../constants/ColorPalette'

const Contents = styled.div`
  
`;

class DashboardContents extends Component {
  render() {
    return (
      <Router>
        <Contents>

        </Contents>
      </Router>
    );
  }
}

export default DashboardContents;
