import React, { Component } from 'react';
import styled from 'styled-components';
import ColorPalette from '../../constants/ColorPalette'
import Breadcrumbs from "../../components/DashboardSchedule/Breadcrumbs";
import DashboardScheduleTitle from "../../components/DashboardSchedule/DashboardScheduleTitle";
import ScheduleOfAppoinments from "../../components/DashboardSchedule/ScheduleOfAppoinments";
import AppoitmentService from "../../services/AppoitmentService";

const ContainerDiv = styled.div`
  display: flex;
  flex-flow: column nowrap;		
`;

class DashboardSchedule extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      data: []
    };
  }

  fetchAppointmentData() {
    AppoitmentService.getAppointments().then((data) => {
      this.setState({
        data: data,
        loading: false
      });
    }).catch((e) => {
      console.error(e);
    });
  }

  componentWillMount(){
    this.setState({
      loading: true
    }, () => { this.fetchAppointmentData() });
  }

  render() {
    if (this.state.loading) {
      return (<h2>Loading...</h2>);
    }

    return (
      <ContainerDiv>
        <DashboardScheduleTitle/>
        <ScheduleOfAppoinments data={this.state.data} />
        <Breadcrumbs/>
      </ContainerDiv>
    );
  }
}

export default DashboardSchedule;
