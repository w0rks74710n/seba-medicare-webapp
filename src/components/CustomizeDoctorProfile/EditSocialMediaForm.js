import React from "react";
import { Field } from 'redux-form';
import { TextField, Card, CardTitle, CardText, Cell, Button } from 'react-md';

const renderTextField = ({ input, meta: { touched, error }, ...others }) => (
  <TextField {...input} {...others} error={touched && !!error} errorText={error} />
);

export const EditSocialMediaForm = ({ handleSubmit, onSubmit }) => {
  return(
    <Card>
      <CardTitle title={'Social Media'} style={{paddingBottom: 0}}/>
      <CardText style={{paddingTop: 0}}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Field
            id="socialMedia[facebook]"
            name="socialMedia[facebook]"
            label="Facebook"
            component={renderTextField}
            className="md-cell--top" />
          <Field
            id="socialMedia[linkedIn]"
            name="socialMedia[linkedIn]"
            label="LinkedIn"
            component={renderTextField}
            className="md-cell--top" />
          <Field
            id="socialMedia[xing]"
            name="socialMedia[xing]"
            label="Xing"
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

export default EditSocialMediaForm;
