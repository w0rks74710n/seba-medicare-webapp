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

class AppointmentListItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      id: this.props._id,
      doctor: this.props.doctor,
      patient: this.props.patient,
      illness: this.props.illness,
      //Date will be set in componentWillMount
      //Time will be set in componentWillMount
    };
  }

  //Take Date information and set date / time seperately
  componentWillMount(){
    var array = this.props.date.toString().split("T");

    this.setState({
      date: array[0],
      time: array[1].slice(0, -5)
    });
  }

  render() {
    return (
      <Card style={CardStyle} className="md-block-centered">
        <CardTitle
          title= {this.state.patient}
          subtitle= { "Date: " + this.state.date + ", Time: " + this.state.time }
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
            />
            <TimePicker
              id="appointment-time-landscape"
              label="Time"
              className="md-cell"
              displayMode="landscape"
              fullWidth={false}
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
          <Button flat onClick={() => this.props.onDelete(this.state._id)}>Cancel</Button>
          <Button flat>Update</Button>
        </CardActions>
      </Card>
    );
  }
}

export default AppointmentListItem;