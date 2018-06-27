import React, { Component } from "react";
import styled from "styled-components";

import DoctorReviewsDialog from '../DoctorProfileReviews/DoctorReviewsDialog';

import {
  Button
 } from 'react-md';

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

  .reviews, .material-icons {
    vertical-align: middle;
  }
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

class DoctorProfileHeader extends Component {

  constructor(props){
    super(props);
  }

  sendReviewToServer(reviewObj) {
    // do server call here...

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
          {/* TODO: add later */}
          <div className="rating">
            <i className="material-icons" style={{width: '24px'}}>star_rate</i>
            <i className="material-icons" style={{width: '24px'}}>star_rate</i>
            <i className="material-icons" style={{width: '24px'}}>star_rate</i>
            <i className="material-icons" style={{width: '24px'}}>star_rate</i>
            <i className="material-icons" style={{width: '24px'}}>star_rate</i>
            <span className="reviews"> ({this.props.doctorReviewsTotal} Reviews)</span>
          </div>
        </BasicInfo>
        <QuickButtons>
          <Button flat primary iconBefore={false} iconChildren="chat_bubble_outline" disabled>Emergency Contact</Button>
          <Button flat primary iconBefore={false} iconChildren="calendar_today">Make Appointment</Button>
          <DoctorReviewsDialog sendToServer={this.sendReviewToServer} />
        </QuickButtons>
      </DoctorProfileHeaderComponent>
    )
  }
}

export default DoctorProfileHeader;