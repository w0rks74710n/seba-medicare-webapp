import React, { Component } from "react";
import styled from "styled-components";
import EditAboutFormContainer from "./EditAboutFormContainer";
import EditContactInformationFormContainer from "./EditContactInformationFormContainer";
import EditSocialMediaFormContainer from "./EditSocialMediaFormContainer";
import EditExperienceFormContainer from "./EditExperienceFormContainer";
import EditEducationFormContainer from "./EditEducationFormContainer";
import EditPicturesFormContainer from "./EditPicturesFormContainer"

const CustomizeDoctorProfileContainer = styled.div`
  width: 100%;
  display: block;
`;

class CustomizeDoctorProfile extends Component {
  render(){
    return(
      <CustomizeDoctorProfileContainer>
        <EditAboutFormContainer/>
        <br />
        <EditContactInformationFormContainer />
        <br />
        <EditSocialMediaFormContainer />
        <br />
        <EditExperienceFormContainer />
        <br />
        <EditEducationFormContainer />
        <br />
        <EditPicturesFormContainer />
      </CustomizeDoctorProfileContainer>
    );
  }
}

export default CustomizeDoctorProfile