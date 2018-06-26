import React, { Component } from "react";
import styled from "styled-components";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardText,
  CardTitle,
} from 'react-md';
import ColorPalette from "../../constants/ColorPalette"
import { DatePicker, TimePicker } from 'react-md';
import PrivacyPolicy from "../../containers/PrivacyPolicy/PrivacyPolicy";

const AppointmentListItemDiv = styled.div`
  display: inline-flex;
  border: 1px solid ${ ColorPalette.linksHover };
  box-shadow: 2px 1px 1px rgba(0,0,0,.2);
  height: 100px;
  width: 800px;
  margin: auto;
  margin-top: 15px;
`;

const TimeDiv = styled.div`
  height: 100px;
  width: 150px;
`;

const InfoDiv = styled.div`
  border-left: 3px solid ${ ColorPalette.linksHover };  
  height: 100px;
  width: 250px;
  
  &:hover {
    background-color: ${ ColorPalette.linksHover };
	}	
`;

const CancelDiv = styled.div`
  border-left: 3px solid ${ ColorPalette.linksHover };  
  height: 100px;
  width: 130px;
`;

const UpdateDiv = styled.div`
  border-left: 3px solid ${ ColorPalette.linksHover };  
  height: 100px;
  width: 320px;
`;

const ParagraphForPicker = styled.p`
  height: 40px;
  width: 320px;   
  font-size: 14px;
	color: #424242;
`;

const TimeParagraph = styled.p`
  text-justify: inter-word;
  font-size: 15px;
  color: ${ ColorPalette.primary };
`;

const Paragraph = styled.p`
  text-justify: inter-word;
  font-size: 14px;
	color: #424242;
`;

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
          <Button flat>Cancel</Button>
          <Button flat>Update</Button>
        </CardActions>
      </Card>
    );
  }
}

export default AppointmentListItem;