import React from 'react';

import EditEducationForm from '../../components/CustomizeDoctorProfile/EditEducationForm';

const EditEducationFormContainer = ({ id, education }) => {

  return (
    <EditEducationForm
      id={id}
      education={education}
    />
  );
};

export default EditEducationFormContainer;