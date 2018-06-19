import React, { Component } from "react";
import styled from "styled-components";

const DoctorProfileNavComponent = styled.section`
  width: 200px;
  clear: both;
  float: left;
  text-align: right;

  ul {
    list-style-type: none;

    li {
      margin: 10px;

      a {
        text-decoration: none;
        color: grey;

        &:hover:after, &:active:after {
          content: " >";
        } 
      }
    }
  }
`;

class DoctorProfileNav extends Component {

  render() {
    return(
      <DoctorProfileNavComponent>
        <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#reviews">Reviews</a></li>
        </ul>
      </DoctorProfileNavComponent>
    )
  }
}

export default DoctorProfileNav;

