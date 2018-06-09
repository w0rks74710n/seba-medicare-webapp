import React, { Component } from "react";
import styled from "styled-components";
import ColorPalette from "../../constants/ColorPalette";
import CustomizeDoctorProfileForm from "../../components/CustomizeDoctorProfile/CustomizeDoctorProfileForm";

const CustomizeDoctorProfileContainer = styled.div`
  width: 100%;
  display: inline-flex;
  background-color: ${ColorPalette.contentBackground}
`;

class CustomizeDoctorProfile extends Component {
  render(){
    return(
      <CustomizeDoctorProfileContainer>
        <CustomizeDoctorProfileForm/>
      </CustomizeDoctorProfileContainer>
    );
  }
}

export default CustomizeDoctorProfile