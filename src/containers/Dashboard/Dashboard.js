import React, { Component } from "react";
import { CustomizeDoctorProfile } from "../";

class Dashboard extends Component {
  componentWillMount() {

  }

  render() {
    return (
      <div className="Dashboard">
        <CustomizeDoctorProfile />
      </div>
    )
  }
}

export default Dashboard