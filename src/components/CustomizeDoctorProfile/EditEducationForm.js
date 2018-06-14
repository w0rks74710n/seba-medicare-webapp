import React from "react";
import { Field } from 'redux-form';
import { TextField, Card, CardTitle, CardText, Cell, Button } from 'react-md';

const renderTextField = ({ input, meta: { touched, error }, ...others }) => (
  <TextField {...input} {...others} error={touched && !!error} errorText={error} />
);

export const EditEducationForm = ({ handleSubmit, onSubmit }) => {
  return(
    <Card>
      <CardTitle title={'Education'} style={{paddingBottom: 0}}/>
      <CardText style={{paddingTop: 0}}>
        <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="education[university]"
          name="education[university]"
          label="University"
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

export default EditEducationForm;
