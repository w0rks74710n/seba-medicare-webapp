import React, { Component } from "react";
import styled from "styled-components";

import DoctorProfileAbout from "./DoctorProfileAbout";
import DoctorProfileContactInfo from "./DoctorProfileContactInfo";
import DoctorProfileExperience from "./DoctorProfileExperience";
import DoctorProfileEducation from "./DoctorProfileEducation";
import DoctorProfileSocialMedia from "./DoctorProfileSocialMedia";
import DoctorProfileImages from "./DoctorProfileImages";

const DoctorProfileInformationComponent = styled.section`
    width: 900px;
    float: left;

`;

class DoctorProfileInformation extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return(
        <DoctorProfileInformationComponent>
            <DoctorProfileAbout about={this.props.doctorProfile.about}/>
            <DoctorProfileContactInfo contact={this.props.doctorProfile.contactInformation}/>
            <DoctorProfileSocialMedia socialMedia={this.props.doctorProfile.socialMedia}/>
            <DoctorProfileExperience experience={this.props.doctorProfile.education}/>
            <DoctorProfileEducation education={this.props.doctorProfile.education}/>
            <DoctorProfileImages images={this.props.doctorProfile.images}/>
        </DoctorProfileInformationComponent>
        )
    }
}

export default DoctorProfileInformation;
