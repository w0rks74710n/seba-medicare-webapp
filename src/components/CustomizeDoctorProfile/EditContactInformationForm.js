import React from "react";
import { Field } from 'redux-form';
import { TextField, Card, CardTitle, CardText, Cell, Button } from 'react-md';

const renderTextField = ({ input, meta: { touched, error }, ...others }) => (
  <TextField {...input} {...others} error={touched && !!error} errorText={error} />
);

export const EditContactInformationForm = ({ handleSubmit, onSubmit }) => {
  return(
    <Card>
      <CardTitle title={'Contact Information'} style={{paddingBottom: 0}}/>
      <CardText style={{paddingTop: 0}}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Field
            id="contactInformation[fullName]"
            name="contactInformation[fullName]"
            label="Full Name"
            component={renderTextField}
            className="md-cell--top" />
          <Field
            id="contactInformation[email]"
            name="contactInformation[email]"
            label="E-mail"
            type="email"
            component={renderTextField}
            className="md-cell--top" />
          <Field
            id="contactInformation[mobile]"
            name="contactInformation[mobile]"
            label="Mobile"
            type="tel"
            component={renderTextField}
            className="md-cell--top" />
          <Field
            id="contactInformation[practiceWebsite]"
            name="contactInformation[practiceWebsite]"
            label="Practice Website"
            component={renderTextField}
            className="md-cell--top" />
          <Field
            id="contactInformation[addressLine1]"
            name="contactInformation[addressLine1]"
            label="Address Line 1"
            component={renderTextField}
            className="md-cell--top" />
          <Field
            id="contactInformation[addressLine2]"
            name="contactInformation[addressLine2]"
            label="Address Line 2"
            component={renderTextField}
            className="md-cell--top" />
          <Cell size={12}>
            <Button raised children="Submit" type="submit" />
          </Cell>
        </form>
      </CardText>
    </Card>
  );
};

export default EditContactInformationForm;