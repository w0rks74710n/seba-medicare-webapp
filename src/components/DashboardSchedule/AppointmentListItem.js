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
      doctor: this.props.doctor,
      patient: this.props.patient,
      illness: this.props.illness,
      date: this.props.date
      //Date will be set in componentWillMount
      //Time will be set in componentWillMount
    };
  }

  handleDateChange = (givenDate) => {
    var dateArray = givenDate.split("/");

    this.setState({
      day: dateArray[0],
      month: dateArray[1],
      year: dateArray[2]
    });
    this.initialize();
  };

  handleTimeChange = (givenTime) => {
    var timeArray = givenTime.split(":");

    this.setState({
      hour: timeArray[0],
      minute: timeArray[1]
    });
    this.initialize();
  };

  initialize(){
    var parse = Date.parse(this.state.date);
    var indate = new Date(parse);

    console.log(this.state.day + "/" + this.state.month + "/" + this.state.year + " " + this.state.hour + ":" + this.state.minute);

    indate.setDate(this.state.day);
    indate.setMonth(this.state.month);
    indate.setHours(this.state.hour);
    indate.setMinutes(this.state.minute);

    this.setState({
      date: indate
    });
  }

  addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  returnTime(date) {
    var h = this.addZero(date.getHours());
    var m = this.addZero(date.getMinutes());
    var s = this.addZero(date.getSeconds());
    this.setState({
      hour: h,
      minute: m,
      second: s
    });
    return h + ":" + m + ":" + s;
  }

  returnDate(date) {
    var d = this.addZero(date.getDay());
    var m = this.addZero(date.getMonth());
    var y = this.addZero(date.getFullYear());
    this.setState({
      day: d,
      month: m,
      year: y
    });
    return d + "." + m + "." + y;
  }

  //Take Date information and set date / time seperately
  componentWillMount(){
    var parse = Date.parse(this.state.date);
    var date = new Date(parse);

    newDate = this.returnDate(date);
    newTime = this.returnTime(date);
  }

  render() {
    return (
      <Card style={CardStyle} className="md-block-centered">
        <CardTitle
          title= {this.state.patient}
          subtitle= { "Date: " + newDate + ", Time: " + newTime }
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
          <Button flat onClick={() => this.props.onDelete(this.state.id)}>Cancel</Button>
          <Button flat onClick={() => this.props.onUpdate(this.state, this.state.id)}>Update</Button>
        </CardActions>
      </Card>
    );
  }
}

export default AppointmentListItem;