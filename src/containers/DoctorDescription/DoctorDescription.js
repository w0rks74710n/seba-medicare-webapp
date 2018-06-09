import React, { Component } from 'react';
import logo from '../../resources/medicare_logo.png';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ColorPalette from '../../constants/ColorPalette'
import Photo from "../../components/DoctorDescription/Photo";
import BasicInfo from "../../components/DoctorDescription/BasicInfo";
import ContactInformation from "../../components/DoctorDescription/ContactInformation";
import SpecializedTreatments from "../../components/DoctorDescription/SpecializedTreatments";

const DoctorDescriptionDiv = styled.div`
  padding: 5px;
  display: flex;
  width: 1000px;
  height: 150px;
  margin: auto;
  flex-flow: row nowrap;		
`;

const BasicInfoDiv = styled.div`
  padding: 5px;
  display: flex;
  margin: auto;
  margin-left: 0px;
  flex-flow: column nowrap;		
`;

const ContactDiv = styled.div`
  margin: auto;
  margin-left: 0px;	
`;

class DoctorDescription extends Component {
  render() {
    return (
      <Router>
        <DoctorDescriptionDiv>
          <Photo/>
          <BasicInfoDiv>
            <BasicInfo/>
            <SpecializedTreatments/>
          </BasicInfoDiv>
          <ContactDiv>
            <ContactInformation/>
          </ContactDiv>
        </DoctorDescriptionDiv>
      </Router>
    );
  }
}

export default DoctorDescription;
