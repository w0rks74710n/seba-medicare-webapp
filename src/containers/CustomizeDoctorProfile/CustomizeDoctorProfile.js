"use strict";

import React, { Component } from "react";
import styled from "styled-components";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import EditAboutFormContainer from "./EditAboutFormContainer";
import EditContactInformationFormContainer from "./EditContactInformationFormContainer";
import EditSocialMediaFormContainer from "./EditSocialMediaFormContainer";
import EditExperienceFormContainer from "./EditExperienceFormContainer";
import EditEducationFormContainer from "./EditEducationFormContainer";
import EditMedicareServicesFormContainer from "./EditMedicareServicesFormContainer"
import EditPicturesFormContainer from "./EditPicturesFormContainer";

import DoctorProfileInformationService from "../../services/DoctorProfileInformationService";

const CustomizeDoctorProfileContainer = styled.div`
  width: 100%;
  display: block;
`;

class CustomizeDoctorProfile extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      data: [],
      doctor_id: window.localStorage['id']
    };
  }

  componentWillMount() {

    this.setState({
      loading: true
    }, () => {
      if (this.props.match.params.id !== this.state.doctor_id) {
        confirmAlert({
          title: 'Unauthorized Access',
          message: 'You are not allowed to access this profile. Redirecting to your own profile',
          buttons: [
            {
              label: 'Understood',
              onClick: () => window.location.replace('/dashboard/customizeProfile/' + this.state.doctor_id)
            }
          ]
        });
      } else {
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
        <EditExperienceFormContainer id={this.props.match.params.id}
                                     experience={this.state.data.doctorProfileInformation.experience}/>
        <br/>
        <EditEducationFormContainer id={this.props.match.params.id}
                                    education={this.state.data.doctorProfileInformation.education}/>
        <br/>
        <EditMedicareServicesFormContainer id={this.props.match.params.id}
                                           services={this.state.data.doctorProfileInformation.services}/>
        <br />
        <EditPicturesFormContainer id={this.props.match.params.id}
                                   images={this.state.data.doctorProfileInformation.images}/>
      </CustomizeDoctorProfileContainer>
    );
  }
}

export default CustomizeDoctorProfile