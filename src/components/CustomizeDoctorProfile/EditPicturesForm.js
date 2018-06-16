import React from "react";
import { Field } from 'redux-form';
import { FileInput, TextField, Card, CardTitle, CardText, Cell, Button } from 'react-md';

const renderFileInput = ({ input, meta: { touched, error }, ...others }) => (
  <FileInput {...input} {...others} error={touched && !!error} errorText={error} />
);

const renderTextField = ({ input, meta: { touched, error }, ...others }) => (
  <TextField {...input} {...others} error={touched && !!error} errorText={error} />
);


export const EditPicturesForm = ({ handleSubmit, onSubmit }) => {
  return(
    <Card>
      <CardTitle title={'Images'} style={{paddingBottom: 0}}/>
      <CardText style={{paddingTop: 0}}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Field
            id="server-upload-file"
            label="Choose file"
            required
            accept="image/*"
            name="file"
            className="file-inputs__upload-form__file-upload"
            primary
            iconBefore
            component={renderFileInput}
          />
          <Field
            id="server-upload-file-field"
            placeholder="No file chosen"
            className="file-inputs__upload-form__file-field"
            readOnly
            fullWidth={false}
            component={renderTextField}
          />
          <Cell size={12}>
            <Button raised children="Submit" type="submit" />
          </Cell>
        </form>
      </CardText>
    </Card>
  );
};

export default EditPicturesForm;
