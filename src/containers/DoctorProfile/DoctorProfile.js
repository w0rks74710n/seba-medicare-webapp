import React, { Component } from "react";
import DoctorProfileHeader from "../../components/DoctorProfileHeader/DoctorProfileHeader";
import DoctorProfileNav from "../../components/DoctorProfileNav/DoctorProfileNav";
import DoctorProfileReviews from "../../components/DoctorProfileReviews/DoctorProfileReviews";
import styled from "styled-components";


const DoctorProfileComponent = styled.section`



`;


class DoctorProfile extends Component {
  componentWillMount() {

  }

  render() {
    return (
      <DoctorProfileComponent>
        <DoctorProfileHeader/>
        <DoctorProfileNav/>
        <DoctorProfileReviews id="reviews"/>
      
      </DoctorProfileComponent> 
    )
  }
}

export default DoctorProfile;