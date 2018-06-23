import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
  patientName: 'Roxhens Meraj',
  illness: 'Depression based on anxiety and discomfort',
  date: '2018-06-25',
  time: '11:00',
  appointment_id: '123456789'
};

const sampleAppointment2 = {
  doctorName: 'Dr Saner Turhaner',
  patientName: 'Sebastian Speth',
  illness: 'Mind frecking panic attacks',
  date: '2018-06-25',
  time: '13:00',
  appointment_id: '123456780'
};

class ScheduleOfAppoinments extends Component {

  render() {
    return (
      <AppointmentsDiv>
        <AppointmentListItem {...sampleAppointment1} />
        <AppointmentListItem {...sampleAppointment2} />
      </AppointmentsDiv>
    );
  }
}

export default ScheduleOfAppoinments;
