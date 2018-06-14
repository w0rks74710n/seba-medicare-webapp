import React from 'react';
import { reduxForm } from 'redux-form';

import EditSocialMediaForm from '../../components/CustomizeDoctorProfile/EditSocialMediaForm';

const EditSocialMediaFormContainer = ({ handleSubmit }) => {

  const submitForm = (formValues) => {
    console.log('submitting Form: ', formValues);
  };

  return (
    <EditSocialMediaForm
      onSubmit={submitForm}
      handleSubmit={handleSubmit}
    />
  );
};

const formConfiguration = {
  form: 'socialMedia'
};

export default reduxForm(formConfiguration)(EditSocialMediaFormContainer);