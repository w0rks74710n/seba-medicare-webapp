import React, { Component } from 'react';
import AppointmentListItem from '../../components/AppointmentList/AppointmentListItem';

class AppointmentList extends Component {
  render() {
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

    return (
      <AppointmentListComponent>
        <AppointmentListItem {...sampleAppointment1} />
        <AppointmentListItem {...sampleAppointment2} />
      </AppointmentListComponent>
    );
  }
}

export default AppointmentList;