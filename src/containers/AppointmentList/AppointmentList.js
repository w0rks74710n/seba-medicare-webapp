import React, { Component } from 'react';
import AppointmentListItem from '../../components/AppointmentList/AppointmentListItem';

class AppointmentList extends Component {
  render() {
    const sampleAppointment = {
      doctorName: 'Dr Saner Turhaner',
      patientName: 'Roxhens Meraj',
      date: '2018-06-25',
      time: '11:00',
      appointment_id: '123456789'
    };

    return (
      <AppointmentListComponent>
        <AppointmentListItem {...sampleAppointment} />
        <AppointmentListItem {...sampleAppointment} />
        <AppointmentListItem {...sampleAppointment} />
      </AppointmentListComponent>
    );
  }
}

export default AppointmentList;