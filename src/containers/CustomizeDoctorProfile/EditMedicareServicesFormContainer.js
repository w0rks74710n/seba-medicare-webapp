import React from 'react';

import EditMedicareServicesForm from '../../components/CustomizeDoctorProfile/EditMedicareServicesForm';

const EditMedicareServicesFormContainer = ({ id, services }) => {
  return (
    <EditMedicareServicesForm
      id={id}
      services={services}
    />
  );
};

export default EditMedicareServicesFormContainer;