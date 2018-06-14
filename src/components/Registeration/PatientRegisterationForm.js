import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form';
import { TextField, Card, CardTitle, CardText, Cell, Button } from 'react-md';

const renderTextField = ({ input, meta: { touched, error }, ...others }) => (
  <TextField {...input} {...others} error={touched && !!error} errorText={error} />
);

export const PatientRegisterationForm = ({ handleSubmit, onSubmit }) => {
  return(
    <Card>
      <CardTitle title={'About'} style={{paddingBottom: 0}}/>
      <CardText style={{paddingTop: 0}}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Field
            id="about[description]"
            name="about[description]"
            component={renderTextField}
            label="Description"
            rows={3}
            maxLength={2000}
            className="md-cell--top"
            helpText="Here you can enter a short description about yourself, your practice, your interests and anything you consider relevant for the visitors of your profile."
          />
          <Cell size={12}>
            <Button raised children="Submit" type="submit" />
          </Cell>
        </form>
      </CardText>
    </Card>
  );
};

export default PatientRegisterationForm;
