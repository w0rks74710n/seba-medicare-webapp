import React, { Component } from "react";
import styled from "styled-components";

import DoctorProfileService from '../../services/DoctorProfileService';

import DoctorProfileHeader from "../../components/DoctorProfileHeader/DoctorProfileHeader";
import DoctorProfileInformation from "../../components/DoctorProfileInformation/DoctorProfileInformation";
import DoctorProfileReviews from "../../components/DoctorProfileReviews/DoctorProfileReviews";


const DoctorProfileComponent = styled.section`



`;


class DoctorProfile extends Component {

  constructor(props){
    super(props);
  }

  componentWillMount(props) {
    this.setState({
      loading: true
    });

    let id = this.props.match.params.id;
    
    DoctorProfileService.getDoctorProfile(id).then( data => {
      this.setState({
        doctorProfile: data.doctorProfileInformation,
        loading: false
      });
    }).catch( error => {
      console.log(error);
    });


  }

  render() {
    if(this.state.loading) {
      return(<h2>Loading...</h2>);
    }

    return (
      <DoctorProfileComponent>
        <DoctorProfileHeader/>
        <DoctorProfileInformation doctorProfile={this.state.doctorProfile}/>
        {/* <DoctorProfileReviews/> */}
      </DoctorProfileComponent> 
    )
  }
}

export default DoctorProfile;