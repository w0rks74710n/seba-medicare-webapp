import React from 'react';
import { reduxForm } from 'redux-form';

import EditExperienceForm from '../../components/CustomizeDoctorProfile/EditExperienceForm';
import DoctorProfileInformationService from "../../services/DoctorProfileInformationService";

const EditExperienceFormContainer = ({ handleSubmit, id }) => {

  const submitForm = (formValues) => {
    DoctorProfileInformationService.updateDoctorProfile(formValues, id);
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