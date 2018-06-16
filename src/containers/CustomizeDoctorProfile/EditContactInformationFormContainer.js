import React from 'react';
import { reduxForm } from 'redux-form';

import EditContactInformationForm from '../../components/CustomizeDoctorProfile/EditContactInformationForm';

const EditContactInformationFormContainer = ({ handleSubmit }) => {

  const submitForm = (formValues) => {
    console.log('submitting Form: ', formValues);
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