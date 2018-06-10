import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

import EditAboutForm from '../../components/CustomizeDoctorProfile/EditAboutForm';

const EditAboutFormContainer = ({ handleSubmit }) => {

  const submitForm = (formValues) => {
    console.log('submitting Form: ', formValues);
  };

  return (
    <EditAboutForm
      onSubmit={submitForm}
      handleSubmit={handleSubmit}
    />
  );
}

const formConfiguration = {
  form: 'about'
};

export default reduxForm(formConfiguration)(EditAboutFormContainer);