import React from 'react';
import { reduxForm } from 'redux-form';

import EditAboutForm from '../../components/CustomizeDoctorProfile/EditAboutForm';
import DoctorProfileInformationService from '../../services/DoctorProfileInformationService';

const EditAboutFormContainer = ({ id, about }) => {
  return (
    <EditAboutForm
      id={id}
      about={about}
    />
  );
};

export default (EditAboutFormContainer);