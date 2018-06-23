import React from 'react';
import { reduxForm } from 'redux-form';

import EditEducationForm from '../../components/CustomizeDoctorProfile/EditEducationForm';
import DoctorProfileInformationService from '../../services/DoctorProfileInformationService';

const EditEducationFormContainer = ({ handleSubmit, id }) => {

  const submitForm = (formValues) => {
    DoctorProfileInformationService.updateDoctorProfile(formValues, id);
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