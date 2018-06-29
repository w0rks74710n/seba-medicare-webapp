import React from "react";
import { Field } from 'redux-form';
import { FileInput, TextField, Card, CardTitle, CardText, Cell, Button } from 'react-md';


export const EditPicturesForm = ({ handleSubmit, onSubmit }) => {
  return(
    <Card>
      <CardTitle title={'Images'} style={{paddingBottom: 0}}/>
      <CardText style={{paddingTop: 0}}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FileInput
            id="server-upload-file"
            label="Choose file"
            required
            accept="image/*"
            name="profilePic"
            className="file-inputs__upload-form__file-upload"
            primary
            iconBefore
          />
          <TextField
            id="server-upload-file-field"
            placeholder="No file chosen"
            className="file-inputs__upload-form__file-field"
            readOnly
            fullWidth={false}
          />
          <Cell size={12} style={{textAlign: 'right'}}>
            <Button raised children="Submit" type="submit" />
          </Cell>
        </form>
      </CardText>
    </Card>
  );
};

export default EditPicturesForm;
