import React, { Component } from "react";
import styled from "styled-components";
import {
  Button,
  Card,
  CardActions,
  CardText,
  CardTitle,
} from 'react-md';
import ColorPalette from "../../constants/ColorPalette"
import { DatePicker, TimePicker } from 'react-md';
import UserService from "../../services/UserService";
import DoctorProfileInformationService from "../../services/DoctorProfileInformationService";

const CardStyle = {
  maxWidth: 600,
  margin: 15,
};

const PickerDiv = styled.div`
  display: inline-flex;
`;

const OneDiv = styled.div`
  display: inline-flex;
`;

const CardTextDiv = styled.div`
  width: 250px;
  height: 50px;
  margin-left: -100px;
  margin-bottom: 40px;
  float: left;
`;

const today = new Date();
let newDate;
let newTime;

class AppointmentListItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      id: this.props._id,
      doctor_id: this.props.doctor_id,
      patient_id: this.props.patient_id,
      illness: this.props.illness,
      date: this.props.date
      //Date will be set in componentWillMount
      //Time will be set in componentWillMount
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
      date: newDate + "T" + newTime + ":00.000Z"
    });
  };

  handleTimeChange = (givenTime) => {
    newTime = givenTime;

    this.setState({
      date: newDate + "T" + newTime + ":00.000Z"
    });
  };

  fetchPatientData() {
    UserService.getPatient(this.state.patient_id).then((data) => {
      this.setState({
        patient: data.patient.fullName
      });
      console.log("Patient is got: ", JSON.stringify(data));
    }).catch((e) => {
      console.error(e);
    });
  }

  //Take Date information and set date / time seperately
  componentWillMount(){
    this.fetchPatientData();

    var dateArray = (this.state.date).split("T");
    var dateArray2 = dateArray[0].split("-");

    newDate = dateArray2[0] + "-" + this.addZero(dateArray2[1]) + "-" + this.addZero(dateArray2[2]);
    newTime = dateArray[1].slice(0, -8);

    this.setState({
      dateShown: newDate,
      timeShown: newTime
    });
  }

  render() {
    return (
      <Card style={CardStyle} className="md-block-centered">
        <CardTitle
          title= {this.state.patient}
          subtitle= { "Date: " + this.state.dateShown + ", Time: " + this.state.timeShown }
        />
        <OneDiv>
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

          <CardTextDiv>
            <CardText>
              <p>
                <b>Illness: </b><br/>
                {this.state.illness}
              </p>
            </CardText>
          </CardTextDiv>
        </OneDiv>
        <CardActions>
          <Button flat onClick={() => { if (window.confirm('Are you sure you wish to delete this item?'))
            this.props.onDelete(this.state.id)} }>Cancel</Button>
          <Button flat onClick={() => this.props.onUpdate(this.state, this.state.id)}>Update</Button>
        </CardActions>
      </Card>
    );
  }
}

export default AppointmentListItem;