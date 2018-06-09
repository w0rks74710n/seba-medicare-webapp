import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ColorPalette from '../../constants/ColorPalette'

const BasicInfoDiv = styled.div`
  margin: 5px;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-flow: column nowrap;		
`;

const BasicInfoItem = styled.p`
  margin: 0px;
  margin-bottom: 3px;
  padding: 0px;
	font-style: normal;
  font-size: 14px;
	color: ${ ColorPalette.primaryDark };
`;

class BasicInfo extends Component {
  render() {
    return (
      <Router>
        <BasicInfoDiv>
          <BasicInfoItem>Dr. Hartmut Neumann</BasicInfoItem>
          <BasicInfoItem>Physiotherapist</BasicInfoItem>
        </BasicInfoDiv>
      </Router>
    );
  }
}

export default BasicInfo;
