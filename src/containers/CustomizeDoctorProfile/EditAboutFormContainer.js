import React from 'react';
import { reduxForm } from 'redux-form';

import EditAboutForm from '../../components/CustomizeDoctorProfile/EditAboutForm';
import DoctorProfileInformationService from '../../services/DoctorProfileInformationService'

const EditAboutFormContainer = ({ handleSubmit }) => {

  const submitForm = (formValues) => {
    DoctorProfileInformationService.updateDoctorProfile(formValues, '5b22ab47f8a3420017e6a972');
    console.log('submitting Form: ', formValues);
  };

  return (
    <EditAboutForm
      onSubmit={submitForm}
      handleSubmit={handleSubmit}
    />
  );
};

const formConfiguration = {
  form: 'about'
};

export default reduxForm(formConfiguration)(EditAboutFormContainer);