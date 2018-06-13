import React, { Component } from "react";
import DoctorProfileHeader from "../../components/DoctorProfileHeader/DoctorProfileHeader";
import DoctorProfileNav from "../../components/DoctorProfileNav/DoctorProfileNav";

class DoctorProfile extends Component {
  componentWillMount() {

  }

  render() {
    return (
      <div className="doctor-profile">
        <DoctorProfileHeader/>
        <DoctorProfileNav/>
      </div>
    )
  }
}

export default DoctorProfile