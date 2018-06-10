import React, { Component } from "react";
import styled from "styled-components";
import ColorPalette from "../../constants/ColorPalette";
import EditAboutFormContainer from "./EditAboutFormContainer";

const CustomizeDoctorProfileContainer = styled.div`
  width: 100%;
  display: inline-flex;
  background-color: ${ColorPalette.contentBackground}
`;

class CustomizeDoctorProfile extends Component {
  render(){
    return(
      <CustomizeDoctorProfileContainer>
        <EditAboutFormContainer/>
      </CustomizeDoctorProfileContainer>
    );
  }
}

export default CustomizeDoctorProfile