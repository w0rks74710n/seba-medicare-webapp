import React, { Component } from "react";
import styled from "styled-components";
import { Field, reduxForm } from 'redux-form';
import { TextField, Card, CardTitle, CardText, Cell, Button } from "react-md";
import EditAboutFormContainer from "../../containers/CustomizeDoctorProfile/EditAboutFormContainer"

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
        <EditAboutFormContainer />
        <br />
        <Card>
          <CardTitle title={'Contact Information'} style={{paddingBottom: 0}}/>
          <CardText style={{paddingTop: 0}}>
            <TextField
              id="floating-label-focus-help-text-field"
              label="Full Name"
              className="md-cell--top" />
            <TextField
              id="floating-label-focus-help-text-field"
              label="E-mail"
              type="email"
              className="md-cell--top" />
            <TextField
              id="floating-label-focus-help-text-field"
              label="Mobile"
              type="tel"
              className="md-cell--top" />
            <TextField
              id="floating-label-focus-help-text-field"
              label="Practice Website"
              className="md-cell--top" />
            <TextField
              id="floating-label-focus-help-text-field"
              label="Address Line 1"
              className="md-cell--top" />
            <TextField
              id="floating-label-focus-help-text-field"
              label="Address Line 2"
              className="md-cell--top" />
          </CardText>
        </Card>
        <br />
        <Card>
          <CardTitle title={'Social Media'} style={{paddingBottom: 0}}/>
          <CardText style={{paddingTop: 0}}>
            <TextField
              id="floating-label-focus-help-text-field"
              label="Facebook"
              className="md-cell--top" />
            <TextField
              id="floating-label-focus-help-text-field"
              label="LinkedIn"
              className="md-cell--top" />
            <TextField
              id="floating-label-focus-help-text-field"
              label="Xing"
              className="md-cell--top" />
          </CardText>
        </Card>
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