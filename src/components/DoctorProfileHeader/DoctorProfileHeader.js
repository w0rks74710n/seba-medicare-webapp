import React, { Component } from "react";
import styled from "styled-components";

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


  render() {
    return(
      <DoctorProfileHeaderComponent>
        <ProfileImage>
          <img src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?size=338&ext=jpg" alt="" />
          {/* TODO: add later */}
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
            <span className="reviews"> (1000 Reviews)</span>
          </div>
        </BasicInfo>
        <QuickButtons>
          <Button flat primary iconBefore={false} iconChildren="chat_bubble_outline" disabled>Emergency Contact</Button>
          <Button flat primary iconBefore={false} iconChildren="calendar_today">Make Appointment</Button>
          <Button flat secondary iconBefore={false} iconChildren="rate_review">Add Review</Button>
        </QuickButtons>
      </DoctorProfileHeaderComponent>
    )
  }
}

export default DoctorProfileHeader;