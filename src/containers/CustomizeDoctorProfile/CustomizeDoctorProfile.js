import React, { Component } from "react";
import styled from "styled-components";
import ColorPalette from "../../constants/ColorPalette";
import EditAboutFormContainer from "./EditAboutFormContainer";
import EditContactInformationFormContainer from "./EditContactInformationFormContainer"
import EditSocialMediaFormContainer from "./EditSocialMediaFormContainer";

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
      </CustomizeDoctorProfileContainer>
    );
  }
}

export default CustomizeDoctorProfile