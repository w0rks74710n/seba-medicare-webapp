import React, { Component } from "react";
import styled from "styled-components";

import DoctorProfileAbout from "./DoctorProfileAbout";
import DoctorProfileContactInfo from "./DoctorProfileContactInfo";
import DoctorProfileExperience from "./DoctorProfileExperience";
import DoctorProfileEducation from "./DoctorProfileEducation";
import DoctorProfileSocialMedia from "./DoctorProfileSocialMedia";
import DoctorProfileImages from "./DoctorProfileImages";

const DoctorProfileInformationComponent = styled.div`
  

`;

class DoctorProfileInformation extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return(
        <DoctorProfileInformationComponent>
            <DoctorProfileImages images={this.props.doctorProfile.images}/>
            <DoctorProfileAbout about={this.props.doctorProfile.about}/>
            <DoctorProfileContactInfo contact={this.props.doctorProfile.contactInformation}/>
            <DoctorProfileExperience experience={this.props.doctorProfile.experience}/>
            <DoctorProfileEducation education={this.props.doctorProfile.education}/>
            <DoctorProfileSocialMedia socialMedia={this.props.doctorProfile.socialMedia}/>
        </DoctorProfileInformationComponent>
        )
    }
}

export default DoctorProfileInformation;
