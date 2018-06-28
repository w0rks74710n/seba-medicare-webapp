import React, { Component } from "react";
import styled from "styled-components";
import { DatePicker, TimePicker } from 'react-md';
import {
  Button,
  Card,
  CardActions,
  CardText,
  CardTitle,
} from 'react-md';
import ColorPalette from "../../constants/ColorPalette";
import DoctorProfileInformationService from "../../services/DoctorProfileInformationService";

const CardStyle = {
  margin: 20,
};

const CardTitleStyle = {
  margin: 10,
};

const Label = styled.label`
  margin: 10px;
  margin-left: 30px;
`;

const Input = styled.input`
  margin: 10px;
  margin-left: 30px;
  padding: 9px 15px;
  
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  
  &:hover {
    background-color: ${ ColorPalette.linksHover };
  }
`;

const PickerDiv = styled.div`
  margin-left: 30px;
  display: inline-flex;
`;

const today = new Date();
let newDate = "";
let newTime = "";

class MakeAnAppointmentForm extends Component {

  constructor(props){
    super(props);

    this.state = {
      doctor: this.props.doctorProfile.contactInformation.fullName,
      doctor_id: this.props.doctor_id,
      patient: "",
      illness: "",
      date: ""
    };
  }

  addZero(char){
    if( char.length == 1 ){
      return "0"+char;
    }
    return char;
  }

  handleDateChange = (givenDate) => {
    let arrayDate = givenDate.split("/");
    newDate = arrayDate[2] + "-" + this.addZero(arrayDate[1]) + "-" + this.addZero(arrayDate[0]);

    this.setState({
      date: newDate + "T" + newTime + ":00.000Z",
    });
    console.log(this.state);
  };

  handleTimeChange = (givenTime) => {
    newTime = givenTime;

    this.setState({
      date: newDate + "T" + newTime + ":00.000Z"
    });
    console.log(this.state);
  };

  handleIllness(event){
    this.setState({
      illness: event.target.value,
    });
    console.log(this.state);
  };

  handlePatient(event){
    this.setState({
      patient: event.target.value,
    });
    console.log(this.state);
  };

  render() {

    return(
      <Card style={CardStyle} className="md-block-centered">
        <CardTitle style={CardTitleStyle}
          title= "Make an online appointment!"
          subtitle= { "Doctor: " + "" }
        />
        <div>
          <Label>Patient Name:</Label>
          <Input name="patient" type="text" onChange={this.handlePatient.bind(this)}/>

          <Label>Illness:</Label>
          <Input name="illness" type="text" onChange={this.handleIllness.bind(this)}/>
        </div>
        <PickerDiv>
          <DatePicker
            id="appointment-date-auto"
            label="Date"
            className="md-cell"
            locales="en-US"
            minDate={today}
            displayMode="landscape"
            fullWidth={false}
            onChange={this.handleDateChange}
          />
          <TimePicker
            id="appointment-time-landscape"
            label="Time"
            className="md-cell"
            displayMode="landscape"
            fullWidth={false}
            onChange={this.handleTimeChange}
          />
        </PickerDiv>

        <CardActions>
          <Button flat onClick={() => { if (window.confirm('Are you sure to create this appointment?'))
            this.props.createAppointment(this.state)} }>Submit</Button>
        </CardActions>
      </Card>
    )
  }
}

export default MakeAnAppointmentForm;