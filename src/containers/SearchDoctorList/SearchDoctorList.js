import React, { Component } from 'react';
import styled from "styled-components";
import SearchDoctorListItem from '../../components/SearchDoctorList/SearchDoctorListItem';

const DoctorListComponent = styled.div`
  display: inline-block;
  width: 700px;
  margin: 10px;    
`;

class DoctorList extends Component {
  render() {
    const sampleDoctor1 = {
      profilePicture: 'https://www.rendimento.com.br/wp-content/uploads/2017/12/depoimento-2.png',
      rating: 5,
      name: 'Dr. Max Muster',
      areaOfSpecialization: 'Otorhinolaryngologist',
      socialMedia: {
        facebook: 'https://facebook.com',
        xing: 'https://www.xing.com',
        linkedIn: 'https://www.linkedin.com/'
      },
      languages: 'Spanish, German, English',
      emergency: 'Available for emergency calls',
      onlineAppointment: 'Available for online appointments',
      doctor_id: '5245yw7729i'
    };
    return (
      <DoctorListComponent>
        <SearchDoctorListItem {...sampleDoctor1} />
        <SearchDoctorListItem {...sampleDoctor1} />
        <SearchDoctorListItem {...sampleDoctor1} />
      </DoctorListComponent>
    );
  }
}

export default DoctorList;