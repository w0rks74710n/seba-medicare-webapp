import React, { Component } from "react";
import styled from "styled-components";

const DoctorProfileNavComponent = styled.section`

`;

class DoctorProfileNav extends Component {

  constructor(props) {  
      super(props);
  }

  render() {
    return(
      <DoctorProfileNav>
        <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#reviews">Reviews</a></li>
        </ul>
      </DoctorProfileNav>
    )
  }
}

export default DoctorProfileNav;

