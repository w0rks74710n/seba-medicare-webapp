import React from 'react';
import { reduxForm } from 'redux-form';

import EditExperienceForm from '../../components/CustomizeDoctorProfile/EditExperienceForm';

const EditExperienceFormContainer = ({ handleSubmit }) => {

  const submitForm = (formValues) => {
    console.log('submitting Form: ', formValues);
  };

  return (
    <EditExperienceForm
      onSubmit={submitForm}
      handleSubmit={handleSubmit}
    />
  );
};

const formConfiguration = {
  form: 'experience'
};

export default reduxForm(formConfiguration)(EditExperienceFormContainer);