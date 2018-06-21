import React, { Component } from "react";
import styled from "styled-components";
import EditAboutFormContainer from "./EditAboutFormContainer";
import EditContactInformationFormContainer from "./EditContactInformationFormContainer";
import EditSocialMediaFormContainer from "./EditSocialMediaFormContainer";
import EditExperienceFormContainer from "./EditExperienceFormContainer";
import EditEducationFormContainer from "./EditEducationFormContainer";
import EditPicturesFormContainer from "./EditPicturesFormContainer"

import DoctorProfileInformationService from "../../services/DoctorProfileInformationService"

const CustomizeDoctorProfileContainer = styled.div`
  width: 100%;
  display: block;
`;

class CustomizeDoctorProfile extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: []
    };
  }

  componentWillMount(){
    this.setState({
      loading: true
    });

    DoctorProfileInformationService.getDoctorProfile(this.props.match.params.id).then((data) => {
      this.setState({
        data: [...data],
        loading: false
      });
    }).catch((e) => {
      console.error(e);
    });
  }

  render(){
    if (this.state.isLoading) {
      return (<h2>Loading...</h2>);
    }

    return(
      <CustomizeDoctorProfileContainer >
        <EditAboutFormContainer id={this.props.match.params.id} about={this.state.data} />
        <br />
        <EditContactInformationFormContainer id={this.props.match.params.id} contactInformation={this.state.data.description} />
        <br />
        <EditSocialMediaFormContainer id={this.props.match.params.id} socialMedia={this.state.data.socialMedia}/>
        <br />
        <EditExperienceFormContainer id={this.props.match.params.id} experience={this.state.data.experience} />
        <br />
        <EditEducationFormContainer id={this.props.match.params.id} education={this.state.data.education} />
        <br />
        <EditPicturesFormContainer id={this.props.match.params.id} pictures={this.state.data.pictures}/>
      </CustomizeDoctorProfileContainer>
    );
  }
}

export default CustomizeDoctorProfile