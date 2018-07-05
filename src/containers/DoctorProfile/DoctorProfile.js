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
import {confirmAlert} from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css';
import ColorPalette from "../../constants/ColorPalette";
import {Link} from "react-router-dom";

const DoctorProfileComponent = styled.section`
  width: 1000px;
  margin: auto;
`;

const AppointmentFormDiv = styled.div`
  display: none;
`;


const SearchBarCont = styled.div`
    height: 65px;
    width: auto;
    display: flex;
    background-color: ${ColorPalette.primaryBackGorundContainer};
    border-bottom: 1px solid lightgray;
`;

const BreadcrumbsDiv = styled.div`
  padding: 20px 0 0 20px;   
  font-size: 16px;
  width:500px;		
  font-weight: bold;
  color: ${ ColorPalette.primaryDark };
`;

const NavLink = styled(Link)`
  display: inline-block;
  font-size: 18px;
  margin: auto;
  margin-left: 10px;
  text-decoration: none;
  color: ${ ColorPalette.primary };
  
  &:hover {
    font-style: italic;
    color: ${ ColorPalette.accent };
	}	
`;

const DividerBreadCrumb = styled.p`
  display: inline-block;
  font-size: 14px;
  margin: auto;
  margin-left: 10px;
  text-decoration: none;
  color: ${ ColorPalette.primary };
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
      confirmAlert({
        title: 'Appointment is successfully created!',
        message: 'Details of appointment now sent to the doctor',
        buttons: [
          {
            label: 'Okey',
            onClick: () => window.location.replace('/home')
          }
        ]
      });
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
          <SearchBarCont>
              <BreadcrumbsDiv>You are here:
                  <NavLink to="/home">Home</NavLink>
                  <DividerBreadCrumb>|</DividerBreadCrumb>
                  <NavLink to={"/doctor-profile/" + window.localStorage['id']}>{this.state.doctorProfile.contactInformation.fullName}</NavLink>
              </BreadcrumbsDiv>
          </SearchBarCont>
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