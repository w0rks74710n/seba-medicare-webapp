import React, { Component } from "react";
import styled from "styled-components";

const DoctorProfileHeaderComponent = styled.section`

`;

class DoctorProfileHeader extends Component {

  render() {
    return(
      <DoctorProfileHeaderComponent>
        <div className="image">
            <img src="#" alt="" />
        </div>
        <div className="description">
            <p className="title">Dr. John Doe</p>
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
            <a href="#">Emergency Contact</a>
            <a href="#">Make Appointment</a>
        </div>
      </DoctorProfileHeaderComponent>
    )
  }
}

export default DoctorProfileHeader;