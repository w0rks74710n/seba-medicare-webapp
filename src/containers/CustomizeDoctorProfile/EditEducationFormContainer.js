import React from 'react';
import { reduxForm } from 'redux-form';

import EditEducationForm from '../../components/CustomizeDoctorProfile/EditEducationForm';

const EditEducationFormContainer = ({ handleSubmit }) => {

  const submitForm = (formValues) => {
    console.log('submitting Form: ', formValues);
  };

  return (
    <EditEducationForm
      onSubmit={submitForm}
      handleSubmit={handleSubmit}
    />
  );
};

const formConfiguration = {
  form: 'education'
};

export default reduxForm(formConfiguration)(EditEducationFormContainer);