import React, { Component } from "react";
import styled from "styled-components";

import DoctorProfileInformationService from '../../services/DoctorProfileInformationService';
import DoctorReviewsService from '../../services/DoctorReviewsService';

import DoctorProfileHeader from "../../components/DoctorProfileHeader/DoctorProfileHeader";
import DoctorProfileInformation from "../../components/DoctorProfileInformation/DoctorProfileInformation";
import MakeAnAppointmentForm from "../../components/DoctorProfileInformation/MakeAnAppointmentForm";

import {
  Divider
} from "react-md";
import AppoitmentService from "../../services/AppoitmentService";

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

  createAppointment(appointment){
    console.log(JSON.stringify(appointment), this.props.match.params.id);
    AppoitmentService.createAppointment(appointment, this.props.match.params.id).then(() => {
      console.log("Appointment is successfully created");
    }).catch((e) => {
      console.error(e);
    });
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
      loading: true,
      doctor_id: this.props.match.params.id,
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
        doctorReviews: data.review,
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
        <DoctorProfileHeader  doctorProfile={this.state.doctorProfile}
                              renderAppointmentForm={this.renderAppointmentForm.bind(this) }/>
        <Divider/>
        { this.state.renderForm ? <MakeAnAppointmentForm doctorProfile={this.state.doctorProfile}
                                                         doctor_id={this.state.doctor_id}
                                                         createAppointment={this.createAppointment.bind(this)}/> : null }
        <DoctorProfileInformation doctorProfile={this.state.doctorProfile}
                                  doctorReviews={this.state.doctorReviews}/>
      </DoctorProfileComponent> 
    )
  }
}

export default DoctorProfile;