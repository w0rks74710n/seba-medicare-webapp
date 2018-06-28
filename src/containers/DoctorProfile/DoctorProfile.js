import React, { Component } from "react";
import styled from "styled-components";

import DoctorProfileInformationService from '../../services/DoctorProfileInformationService';

import DoctorProfileHeader from "../../components/DoctorProfileHeader/DoctorProfileHeader";
import DoctorProfileInformation from "../../components/DoctorProfileInformation/DoctorProfileInformation";
import MakeAnAppointmentForm from "../../components/DoctorProfileInformation/MakeAnAppointmentForm";
import DoctorProfileReviews from "../../components/DoctorProfileReviews/DoctorProfileReviews";

import {
  Divider
} from "react-md";

const DoctorProfileComponent = styled.section`
  width: 1000px;
  margin: auto;
`;

const AppointmentFormDiv = styled.div`
  display: none;
`;

class DoctorProfile extends Component {

  constructor(props){
    super(props);

    this.state = {
      renderForm: false,
    };
  }

  renderAppointmentForm(){
    if(this.state.renderForm == false){
      this.setState({
        renderForm: true
      });
    }
    else{
      this.setState({
        renderForm: false
      });
    }
  }

  componentWillMount(props) {
    this.setState({
      loading: true
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

  }

  render() {
    if(this.state.loading) {
      return(<h2>Loading...</h2>);
    }

    return (
      <DoctorProfileComponent>
        <DoctorProfileHeader  doctorProfile={this.state.doctorProfile} renderAppointmentForm={this.renderAppointmentForm.bind(this)}/>
        <Divider/>
        { this.state.renderForm ? <MakeAnAppointmentForm doctor={this.state.doctorProfile} /> : null }
        <DoctorProfileInformation doctorProfile={this.state.doctorProfile}/>
        {/* <DoctorProfileReviews/> */}
      </DoctorProfileComponent> 
    )
  }
}

export default DoctorProfile;