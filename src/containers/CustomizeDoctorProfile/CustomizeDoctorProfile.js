import React, { Component } from "react";
import styled from "styled-components";
import ColorPalette from "../../constants/ColorPalette";
import EditAboutFormContainer from "./EditAboutFormContainer";
import EditContactInformationFormContainer from "./EditContactInformationFormContainer";

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
      </CustomizeDoctorProfileContainer>
    );
  }
}

export default CustomizeDoctorProfile