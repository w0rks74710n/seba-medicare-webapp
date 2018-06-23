import React from 'react';
import { reduxForm } from 'redux-form';

import EditSocialMediaForm from '../../components/CustomizeDoctorProfile/EditSocialMediaForm';
import DoctorProfileInformationService from "../../services/DoctorProfileInformationService";

const EditSocialMediaFormContainer = ({ handleSubmit, id }) => {

  const submitForm = (formValues) => {
    DoctorProfileInformationService.updateDoctorProfile(formValues, id);
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