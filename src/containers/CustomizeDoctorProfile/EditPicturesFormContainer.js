import React from 'react';

import EditPicturesForm from '../../components/CustomizeDoctorProfile/EditPicturesForm';

const EditPicturesFormContainer = ({ id, images }) => {

  return (
    <EditPicturesForm
      id={id}
      images={images}
    />
  );
};

export default EditPicturesFormContainer;