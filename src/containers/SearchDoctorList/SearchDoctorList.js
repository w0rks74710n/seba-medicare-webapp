import React, { Component } from 'react';
import styled from "styled-components";
import SearchDoctorListItem from '../../components/SearchDoctorList/SearchDoctorListItem';

const DoctorListComponent = styled.div`
  display: inline-block;
  width: 700px;
  margin: 10px;    
`;

class DoctorList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DoctorListComponent>
        {this.props.data.doctorProfileInformation.map((doctorCard, i) =>
          <SearchDoctorListItem key={i} {...doctorCard} /> )
        }
      </DoctorListComponent>
    );
  }
}

export default DoctorList;