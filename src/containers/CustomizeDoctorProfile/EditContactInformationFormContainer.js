import React from 'react';
import { reduxForm } from 'redux-form';

import EditContactInformationForm from '../../components/CustomizeDoctorProfile/EditContactInformationForm';
import DoctorProfileInformationService from '../../services/DoctorProfileInformationService';

const EditContactInformationFormContainer = ({ handleSubmit }) => {

  const submitForm = (formValues) => {
    console.log('submitting Form: ', formValues);
    DoctorProfileInformationService.updateDoctorProfile(formValues)
  };

  return (
    <EditContactInformationForm
      onSubmit={submitForm}
      handleSubmit={handleSubmit}
    />
  );
}

const formConfiguration = {
  form: 'contactInformation'
};

export default reduxForm(formConfiguration)(EditContactInformationFormContainer);