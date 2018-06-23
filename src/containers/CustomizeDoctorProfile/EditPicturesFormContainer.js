import React from 'react';
import { reduxForm } from 'redux-form';

import EditPicturesForm from '../../components/CustomizeDoctorProfile/EditPicturesForm';
import DoctorProfileInformationService from "../../services/DoctorProfileInformationService";

const EditPicturesFormContainer = ({ handleSubmit, id }) => {

  const submitForm = (formValues) => {
    DoctorProfileInformationService.updateDoctorProfile(formValues, id);
  };

  return (
    <EditPicturesForm
      onSubmit={submitForm}
      handleSubmit={handleSubmit}
    />
  );
};

const formConfiguration = {
  form: 'pictures'
};

export default reduxForm(formConfiguration)(EditPicturesFormContainer);