import React from 'react';

import EditMedicareServicesForm from '../../components/CustomizeDoctorProfile/EditMedicareServicesForm';

const EditMedicareServicesFormContainer = ({ id, services, success }) => {
  return (
    <EditMedicareServicesForm
      id={id}
      services={services}
      success={success}
    />
  );
};

export default EditMedicareServicesFormContainer;