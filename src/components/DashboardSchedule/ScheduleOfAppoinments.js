import React, { Component } from 'react';
import styled from 'styled-components';
import ColorPalette from '../../constants/ColorPalette'
import AppointmentListItem from './AppointmentListItem';

const AppointmentsDiv = styled.table`
  display: inline-block;
  width: 90%;
  margin: auto;
  margin-top: 30px;
	margin-bottom: 30px;
`;

const sampleAppointment1 = {
  doctorName: 'Dr Saner Turhaner',
  patientName: 'Alexi Laiho',
  illness: 'Depression based on anxiety and discomfort',
  date: '2018-06-25',
  time: '11:00',
  appointment_id: '123456789'
};

const sampleAppointment2 = {
  doctorName: 'Dr Saner Turhaner',
  patientName: 'Joey Jordison',
  illness: 'Mind frecking panic attacks',
  date: '2018-06-25',
  time: '13:00',
  appointment_id: '123456780'
};

class ScheduleOfAppoinments extends Component {

  constructor(props) {
    super(props);
  }

  onDelete(id) {
    this.props.deleteAppointmentData(id);
    console.log("ScheduleOfAppointments: " + id);
  }

  render() {
    return (
      <AppointmentsDiv>
        {this.props.data.appointment.map((appointmentCard, i) =>
          <AppointmentListItem key={i} {...appointmentCard} onDelete={this.onDelete.bind(this)} /> )
        }
      </AppointmentsDiv>
    );
  }
}

export default ScheduleOfAppoinments;
