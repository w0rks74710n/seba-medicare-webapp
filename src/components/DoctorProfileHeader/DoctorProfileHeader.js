import React, { Component } from "react";
import styled from "styled-components";

const DoctorProfileHeaderComponent = styled.section`

  width: 1000px;
  height: 200px;
  margin: 10px auto;
  border-bottom: 1px solid grey;

 
  .image {
    width: 200px;
    height: 200px;
    margin: 10px 10px 20px;
    float: left;
    display: inline-block;

    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
    }
  }

  .description {
    width: 500px;
    display: inline-block;

    .title {
      font-size: 1.2em;
      font-weight: bold;
      margin-bottom: 0;
    }

    .reviews, .material-icons {
      vertical-align: middle;
    }
  }

  .quick-buttons {
    width: 250px;
    margin-top: 30px;
    float: right;
    display: inline-block;

  }

  .emergency-button {
    width: 200px;
    display: block;
    text-align: center;
    text-decoration: none; 
    padding: 10px;
    margin: 20px;
    background-color: red;
    color: white;
    border: 1px solid black;
    opacity: 0.75;

    &:hover {
      opacity: 1;
    }
  }

  .regular-button {
    width: 200px;
    display: block;
    text-align: center;
    text-decoration: none; 
    padding: 10px;
    margin: 20px;
    background-color: grey;
    color: white;
    border: 1px solid black;
    opacity: 0.75;

    &:hover {
      opacity: 1;
    }
  }
`;

class DoctorProfileHeader extends Component {

  constructor(props){
    super(props);
  }


  render() {
    return(
      <DoctorProfileHeaderComponent>
        <div className="image">
          <img src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?size=338&ext=jpg" alt="" />
        </div>
        <div className="description">
          <p className="title">this.props.doctor.contactInformation.fullName</p>
          <p className="specialization">Doctor Specialization</p>
          <p className="website">www.doctor.de</p>            
          <div className="rating">
            <i className="material-icons" style={{width: '24px'}}>star_rate</i>
            <i className="material-icons" style={{width: '24px'}}>star_rate</i>
            <i className="material-icons" style={{width: '24px'}}>star_rate</i>
            <i className="material-icons" style={{width: '24px'}}>star_rate</i>
            <i className="material-icons" style={{width: '24px'}}>star_rate</i>
            <span className="reviews"> (1000 Reviews)</span>
          </div>
        </div>
        <div className="quick-buttons">
          <a className="emergency-button" href="#">Emergency Contact</a>
          <a className="regular-button" href="#">Make Appointment</a>
        </div>
      </DoctorProfileHeaderComponent>
    )
  }
}

export default DoctorProfileHeader;