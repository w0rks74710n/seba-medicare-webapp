import React from 'react';
import { reduxForm } from 'redux-form';

import EditPicturesForm from '../../components/CustomizeDoctorProfile/EditPicturesForm';

const EditPicturesFormContainer = ({ handleSubmit }) => {

  const submitForm = (formValues) => {
    console.log('submitting Form: ', formValues);
  };

  return (
    <EditPicturesForm
      onSubmit={submitForm}
      handleSubmit={handleSubmit}
    />
  );
};

const formConfiguration = {
  form: 'pictures'
};

export default reduxForm(formConfiguration)(EditPicturesFormContainer);