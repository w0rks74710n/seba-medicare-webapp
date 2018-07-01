import React, { Component } from 'react';
import styled from 'styled-components';
import ColorPalette from '../../constants/ColorPalette'
import AppointmentListItem from './AppointmentListItem';
import {confirmAlert} from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css';

const AppointmentsDiv = styled.table`
  display: inline-block;
  width: 90%;
  margin: auto;
  margin-top: 30px;
	margin-bottom: 30px;
`;

class ScheduleOfAppoinments extends Component {

  constructor(props) {
    super(props);
  }

  onDelete(id) {
    this.props.deleteAppointmentData(id);
    console.log("ScheduleOfAppointments: " + id);
  }

  onUpdate(state, id) {
    this.props.updateAppointmentData(state, id);
    console.log("New Date: " + state.date);
    console.log("ID: " + id);
    confirmAlert({
      title: 'Item is updated successfully!',
      message: 'Date of the appointment is changed as you selected',
      buttons: [
        {
          label: 'Okey',
          onClick: () => window.location.replace('/dashboard/manage-schedule/' + window.localStorage['id'])
        }
      ]
    });
  }

  render() {
    return (
      <AppointmentsDiv>
        {this.props.data.appointment.map((appointmentCard, i) =>
          <AppointmentListItem key={i} {...appointmentCard} onDelete={this.onDelete.bind(this)} onUpdate={this.onUpdate.bind(this)}/> )
        }
      </AppointmentsDiv>
    );
  }
}

export default ScheduleOfAppoinments;
