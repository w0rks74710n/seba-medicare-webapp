import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ColorPalette from '../../constants/ColorPalette'

const SpecializedDiv = styled.div`
  margin: 5px;
  display: flex;
  flex-flow: column nowrap;		
`;

const Title = styled.h6`
  margin: 0px;
  margin-bottom: 3px;
  padding: 0px;
	font-style: bold;
  font-size: 16px;
	color: ${ ColorPalette.primaryDark };
`;

const SpecializedTagDiv = styled.div`
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-flow: row nowrap;		
`;

const TagItem = styled.p`
  margin: 0px;
  padding: 0px;
  margin-right: 4px;
	font-style: normal;
  font-size: 14px;
	color: ${ ColorPalette.primaryDark };
`;

class SpecializedTreatments extends Component {
  render() {
    return (
      <Router>
        <SpecializedDiv>
          <Title>Specialized Treatments:</Title>
          <SpecializedTagDiv>
            <TagItem>Physiotherapy,</TagItem>
            <TagItem>Spine Health,</TagItem>
            <TagItem>Arthoscopy,</TagItem>
            <TagItem>Osteoporosis,</TagItem>
            <TagItem>Trauma and Fracture</TagItem>
          </SpecializedTagDiv>
        </SpecializedDiv>
      </Router>
    );
  }
}

export default SpecializedTreatments;