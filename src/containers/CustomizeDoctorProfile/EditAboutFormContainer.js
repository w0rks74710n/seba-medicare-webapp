import React from 'react';
import { reduxForm } from 'redux-form';

import EditAboutForm from '../../components/CustomizeDoctorProfile/EditAboutForm';
import DoctorProfileInformationService from '../../services/DoctorProfileInformationService';

const EditAboutFormContainer = ({ handleSubmit, id, about }) => {

  const submitForm = (formValues) => {
    DoctorProfileInformationService.updateDoctorProfile(formValues, id);
  };

  return (
    <EditAboutForm
      onSubmit={submitForm}
      handleSubmit={handleSubmit}
      about={about}
    />
  );
};

const formConfiguration = {
  form: 'about'
};

export default reduxForm(formConfiguration)(EditAboutFormContainer);