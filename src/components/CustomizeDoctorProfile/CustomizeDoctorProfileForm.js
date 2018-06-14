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
          <CardTitle title={'Experience'} style={{paddingBottom: 0}}/>
          <CardText style={{paddingTop: 0}}>
            <TextField
              id="floating-label-focus-help-text-field"
              label="Area of Specialization"
              className="md-cell--top" />
            <TextField
              id="floating-label-focus-help-text-field"
              label="Years of Experience"
              className="md-cell--top" />
            <TextField
              id="floating-label-focus-help-text-field"
              label="Previous Experiences"
              rows={5}
              maxLength={5000}
              className="md-cell--top"
              helpText="Here you can describe which relevant achievements you have accomplished during your career, such
               as certifications, medical journal mentions and more."/>
            <TextField
              id="floating-label-focus-help-text-field"
              label="Treatment Focus"
              rows={3}
              maxLength={1000}
              className="md-cell--top"
              helpText="Here you can describe what are your treatment focuses"/>
          </CardText>
        </Card>
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