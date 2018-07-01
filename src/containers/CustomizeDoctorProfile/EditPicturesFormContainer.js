import React from 'react';

import EditPicturesForm from '../../components/CustomizeDoctorProfile/EditPicturesForm';

const EditPicturesFormContainer = ({ id, images, success }) => {

  return (
    <EditPicturesForm
      id={id}
      images={images}
      success={success}
    />
  );
};

export default EditPicturesFormContainer;