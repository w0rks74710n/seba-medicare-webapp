import React from 'react';

import EditSocialMediaForm from '../../components/CustomizeDoctorProfile/EditSocialMediaForm';

const EditSocialMediaFormContainer = ({ id, socialMedia }) => {
  return (
    <EditSocialMediaForm
      id={id}
      socialMedia={socialMedia}
    />
  );
};

export default EditSocialMediaFormContainer;