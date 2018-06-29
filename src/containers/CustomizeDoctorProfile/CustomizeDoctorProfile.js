"use strict";

import React, { Component } from "react";
import styled from "styled-components";
import EditAboutFormContainer from "./EditAboutFormContainer";
import EditContactInformationFormContainer from "./EditContactInformationFormContainer";
import EditSocialMediaFormContainer from "./EditSocialMediaFormContainer";
import EditExperienceFormContainer from "./EditExperienceFormContainer";
import EditEducationFormContainer from "./EditEducationFormContainer";
import EditPicturesFormContainer from "./EditPicturesFormContainer";

import DoctorProfileInformationService from "../../services/DoctorProfileInformationService"

const CustomizeDoctorProfileContainer = styled.div`
  width: 100%;
  display: block;
`;

class CustomizeDoctorProfile extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      data: []
    };
  }

  componentWillMount() {
    this.setState({
      loading: true
    });

    DoctorProfileInformationService.getDoctorProfile(this.props.match.params.id).then((data) => {
      console.log(data);
      this.setState({
        data: data,
        loading: false
      });
    }).catch((e) => {
      console.error(e);
    });
  }

  render() {
    if (this.state.loading) {
      return (<h2>Loading...</h2>);
    }

    return (
      <CustomizeDoctorProfileContainer>
        <EditAboutFormContainer id={this.props.match.params.id}
                                about={this.state.data.doctorProfileInformation.about} />
        <br/>
        <EditContactInformationFormContainer id={this.props.match.params.id}
                                             contactInformation={this.state.data.doctorProfileInformation.contactInformation} />
        <br/>
        <EditSocialMediaFormContainer id={this.props.match.params.id}
                                      socialMedia={this.state.data.doctorProfileInformation.socialMedia}/>
        <br/>
        <EditExperienceFormContainer id={this.props.match.params.id} />
        <br/>
        <EditEducationFormContainer id={this.props.match.params.id} />
        <br/>
        <EditPicturesFormContainer id={this.props.match.params.id} />
      </CustomizeDoctorProfileContainer>
    );
  }
}

export default CustomizeDoctorProfile