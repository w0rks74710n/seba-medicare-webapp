import React from 'react';

import EditExperienceForm from '../../components/CustomizeDoctorProfile/EditExperienceForm';

const EditExperienceFormContainer = ({ id, experience, success }) => {

  return (
    <EditExperienceForm
      id={id}
      experience={experience}
      success={success}
    />
  );
};

export default EditExperienceFormContainer;