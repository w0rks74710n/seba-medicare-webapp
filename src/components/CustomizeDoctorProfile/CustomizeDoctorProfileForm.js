import React, { Component } from "react";
import styled from "styled-components";
import { Field, reduxForm } from 'redux-form';
import { TextField, Card, CardTitle, CardText, Cell, Button } from "react-md";

const CustomizeDoctorProfileFormComponent = styled.div`
  max-width: 900px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-right: 20px;
  padding-left: 20px;
`;

class CustomizeDoctorProfileForm extends Component {
  render() {
    return (
      <CustomizeDoctorProfileFormComponent>
        <br />
        <Card>
          <CardTitle title={'Education'} style={{paddingBottom: 0}}/>
          <CardText style={{paddingTop: 0}}>
            <TextField
              id="floating-label-focus-help-text-field"
              label="University"
              className="md-cell--top" />
          </CardText>
        </Card>
      </CustomizeDoctorProfileFormComponent>
    );
  }
}

export default CustomizeDoctorProfileForm