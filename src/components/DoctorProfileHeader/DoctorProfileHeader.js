import React, { Component } from "react";
import styled from "styled-components";
import 'react-confirm-alert/src/react-confirm-alert.css'

import DoctorReviewsService from "../../services/DoctorReviewsService";
import DoctorReviewsDialog from '../DoctorProfileReviews/DoctorReviewsDialog';

import {
  Button
} from 'react-md';
import DoctorRating from "../DoctorRating/DoctorRating";
import {confirmAlert} from "react-confirm-alert";

const DoctorProfileHeaderComponent = styled.div`
  height: 200px;
  padding-top: 25px;
`;

const ProfileImage = styled.div`
  width: 150px;
  height: 150px;
  float: left;
  display: inline-block;

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 4px solid skyblue;
  }
`;

const BasicInfo = styled.div`
  width: 500px;
  padding-top: 25px;
  padding-left: 50px;
  display: inline-block;
`;

const Title = styled.div`
  font-size: 1.3em;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 0px;
`;

const Specialization = styled.div`
  text-transform: capitalize;
  font-size: 1.2;
  margin-bottom: 5px;
`;

const Website = styled.div`
  margin-bottom: 10px;
  color: skyblue;
  a {
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }  
`;

const QuickButtons = styled.div`
  width: 250px;
  display: inline-block;
  float: right;
  padding-top: 25px;

  Button {
    float: right;
  }
`;

const Rating = styled.div`
  span {
    margin-left: 10px;
  }
`;

class DoctorProfileHeader extends Component {

  constructor(props){
    super(props);
    this.state = {
      userType: window.localStorage['userType'],
    };

    this.isAppointmentAllowed = this.isAppointmentAllowed.bind(this);
    this.sendReviewToServer = this.sendReviewToServer.bind(this);
  }

  sendReviewToServer(reviewObj) {
    DoctorReviewsService.addReview(
      {
        doctor: reviewObj.doctor,
        rating: reviewObj.rating,
        comment: reviewObj.comment
      }
    );
  }

  isAppointmentAllowed() {
    if (this.state.userType && this.state.userType === 'patient') {
      this.props.renderAppointmentForm();
    } else if (this.state.userType && this.state.userType === 'doctor') {
      confirmAlert({
        title: 'Please Switch Account',
        message: 'Please sing in with a patient account to perform an appointment',
        buttons: [
          {
            label: 'Understood'
          }
        ]
      });
    } else {
      confirmAlert({
        title: 'Please Sign In',
        message: 'It is nice you found a doctor and want to do appointment! Please login or register before continuing',
        buttons: [
          {
            label: 'Go to login',
            onClick: () => window.location.replace('/login')
          }
        ]
      });
    }
  }

  render() {
    return(
      <DoctorProfileHeaderComponent>
        <ProfileImage>
          <img src={this.props.doctorProfile.images.profilePic} alt="" />
        </ProfileImage>
        <BasicInfo>
          <Title>{this.props.doctorProfile.contactInformation.fullName}</Title>
          <Specialization>{this.props.doctorProfile.experience.areaOfSpecialization}</Specialization>
          <Website>
            <a target="_blank"
               href={this.props.doctorProfile.contactInformation.practiceWebsite}>
              {this.props.doctorProfile.contactInformation.practiceWebsite}
            </a>
          </Website>
          <Rating className="rating">
            <DoctorRating doctor={this.props.doctorProfile.doctor_id} showNumber={true}/>
          </Rating>
        </BasicInfo>
        <QuickButtons>
          <Button flat primary iconBefore={false} iconChildren="chat_bubble_outline" disabled>Emergency Contact</Button>
          <Button flat primary iconBefore={false} iconChildren="calendar_today" onClick={() => {this.isAppointmentAllowed()}}>Make Appointment</Button>
          <DoctorReviewsDialog doctor={this.props.doctorProfile.doctor_id} sendReviewToServer={this.sendReviewToServer} />
        </QuickButtons>
      </DoctorProfileHeaderComponent>
    )
  }
}

export default DoctorProfileHeader;