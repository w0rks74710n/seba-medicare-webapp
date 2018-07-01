import React from 'react';

import EditEducationForm from '../../components/CustomizeDoctorProfile/EditEducationForm';

const EditEducationFormContainer = ({ id, education, success }) => {

  return (
    <EditEducationForm
      id={id}
      education={education}
      success={success}
    />
  );
};

export default EditEducationFormContainer;