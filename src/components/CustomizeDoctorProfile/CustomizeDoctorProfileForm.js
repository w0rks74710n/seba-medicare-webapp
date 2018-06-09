import React, { Component } from "react";
import styled from "styled-components";
import { Autocomplete, TextField, Card, CardTitle, CardText, Cell, Button } from 'react-md';

const CustomizeDoctorProfileFormComponent = styled.div`
  width: 500px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-right: 20px;
  padding-left: 20px;
`;

class CustomizeDoctorProfileForm extends Component {
  render() {
    return (
      <CustomizeDoctorProfileFormComponent>
        <Card>
          <CardTitle title={'About'} style={{paddingBottom: 0}}/>
          <CardText style={{paddingTop: 0}}>
            <TextField
              id="floating-label-focus-help-text-field"
              label="Description"
              rows="3"
              maxLength={2000}
              className="md-cell--top"
              helpText="Here you can enter a nice description about yourself, your practice, your interests and anything you consider relevant for the visitors of your profile."
            />
            <Cell size={12}>
              <Button raised>Save</Button>
            </Cell>
          </CardText>
        </Card>
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
          </CardText>
        </Card>
      </CustomizeDoctorProfileFormComponent>
    );
  }
}

export default CustomizeDoctorProfileForm