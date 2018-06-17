import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ColorPalette from '../../constants/ColorPalette'
import DoctorRegisterationForm from "../../components/Registeration/DoctorRegisterationForm";
import PatientRegisterationForm from "../../components/Registeration/PatientRegisterationForm";

const RegisterationDiv = styled.div`
  padding: 5px;
  width: 1000px;
  height: 750px;
  margin: auto;	
`;

class RegisterationPage extends Component {
  render() {
    return (
      <RegisterationDiv>
        <Switch>
          <Route exact path="register/doctor-registeration" component = { DoctorRegisterationForm }/>
          <Route exact path="register/patient-registeration" component = { PatientRegisterationForm }/>
        </Switch>
      </RegisterationDiv>
    );
  }
}

export default RegisterationPage;
