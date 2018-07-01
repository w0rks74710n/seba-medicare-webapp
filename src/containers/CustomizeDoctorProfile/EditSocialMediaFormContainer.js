import React from 'react';

import EditSocialMediaForm from '../../components/CustomizeDoctorProfile/EditSocialMediaForm';

const EditSocialMediaFormContainer = ({ id, socialMedia, success }) => {
  console.log(socialMedia);
  return (
    <EditSocialMediaForm
      id={id}
      socialMedia={socialMedia}
      success={success}
    />
  );
};

export default EditSocialMediaFormContainer;