import React, { Component } from "react";
import styled from "styled-components";

import DoctorReviewsService from "../../services/DoctorReviewsService";

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

const Rating = styled.div`
  span {
    margin-left: 10px;
  }
`;

class DoctorProfileHeader extends Component {

  constructor(props){
    super(props);
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

  render() {
    let averageRating = (reviews) => {
      var stars = 0;
      for(var i = 0; i < reviews.length; i++)
        stars += this.props.doctorReviews[i].rating;
      return stars / reviews.length;
    };

    let renderStars = (reviews) => {
      let stars = [];
      for (let i = 0; i < averageRating(reviews); i++) {
          stars.push(
              <i className="material-icons" style={{width: '24px'}}>star_rate</i>
          );
      };
      return stars;
    };

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
            {renderStars(this.props.doctorReviews)}
            <span className="reviews">({this.props.doctorReviews.length} Reviews)</span>
          </Rating>
        </BasicInfo>
        <QuickButtons>
          <Button flat primary iconBefore={false} iconChildren="chat_bubble_outline" disabled>Emergency Contact</Button>
          <Button flat primary iconBefore={false} iconChildren="calendar_today">Make Appointment</Button>
          <DoctorReviewsDialog doctor={this.props.doctorProfile.doctor_id} sendReviewToServer={this.sendReviewToServer} />
        </QuickButtons>
      </DoctorProfileHeaderComponent>
    )
  }
}

export default DoctorProfileHeader;