import React, { Component } from "react";
import styled from "styled-components";

import DoctorProfileInformationService from '../../services/DoctorProfileInformationService';
import DoctorReviewsService from '../../services/DoctorReviewsService';

import DoctorProfileHeader from "../../components/DoctorProfileHeader/DoctorProfileHeader";
import DoctorProfileInformation from "../../components/DoctorProfileInformation/DoctorProfileInformation";

import {
  Divider
} from "react-md";

const DoctorProfileComponent = styled.section`
  width: 1000px;
  margin: auto;

`;

class DoctorProfile extends Component {

  constructor(props){
    super(props);
  }

  componentWillMount(props) {
    this.setState({
      loading: true,
      loadingReviews: true
    });

    let id = this.props.match.params.id;
    
    DoctorProfileInformationService.getDoctorProfile(id).then( data => {
      this.setState({
        doctorProfile: data.doctorProfileInformation,
        loading: false
      });
    }).catch( error => {
      console.log(error);
    });
    DoctorReviewsService.getReviews(id).then( data => {
      this.setState({
        doctorReviews: data.reviews,
        loadingReviews: false
      });
    }).catch( error => {
      console.log(error);
    });
  }

  render() {
    if(this.state.loading) {
      return(<h2>Loading...</h2>);
    }
    if(this.state.loadingReviews) {
      return(<h2>Loading reviews...</h2>);
    }
    return (
      <DoctorProfileComponent>
        <DoctorProfileHeader  doctorProfile={this.state.doctorProfile}/>
        <Divider/>
        <DoctorProfileInformation doctorProfile={this.state.doctorProfile} 
                                  doctorReviews={this.state.doctorReviews}/>
      </DoctorProfileComponent> 
    )
  }
}

export default DoctorProfile;