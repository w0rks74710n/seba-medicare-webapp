import React from 'react';

import EditExperienceForm from '../../components/CustomizeDoctorProfile/EditExperienceForm';

const EditExperienceFormContainer = ({ id, experience }) => {

  return (
    <EditExperienceForm
      id={id}
      experience={experience}
    />
  );
};

export default EditExperienceFormContainer;