import React from 'react';
import { reduxForm } from 'redux-form';

import EditContactInformationForm from '../../components/CustomizeDoctorProfile/EditContactInformationForm';
import DoctorProfileInformationService from '../../services/DoctorProfileInformationService';

const EditContactInformationFormContainer = ({ id, contactInformation }) => {

  return (
    <EditContactInformationForm
      id={id}
      contactInformation={contactInformation}
    />
  );
};

export default EditContactInformationFormContainer;