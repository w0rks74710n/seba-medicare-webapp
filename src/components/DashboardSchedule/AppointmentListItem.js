import React, { Component } from "react";
import styled from "styled-components";
import ColorPalette from "../../constants/ColorPalette"
import { DatePicker, TimePicker } from 'react-md';

const AppointmentListItemDiv = styled.div`
  display: inline-flex;
  border: 1px solid ${ ColorPalette.linksHover };
  box-shadow: 2px 1px 1px rgba(0,0,0,.2);
  height: 100px;
  width: 800px;
  margin: auto;
  margin-top: 15px;
`;

const PickerDiv = styled.div`
  display: inline-flex;
  height: 100px;
  width: 320px;
  margin: auto;
  margin-left: 30px;
`;

const TimeDiv = styled.div`
  margin: auto;
  display: inline-block;
  order: 1;
  height: 100px;
  width: 150px;
`;

const InfoDiv = styled.div`
  margin: auto;
  border-left: 3px solid ${ ColorPalette.linksHover };  
  display: inline-block;
  order: 2;
  height: 100px;
  width: 250px;
  padding: 10px;
  
  &:hover {
    background-color: ${ ColorPalette.linksHover };
	}	
`;

const CancelDiv = styled.div`
  margin: auto;
  border-left: 3px solid ${ ColorPalette.linksHover };  
  display: inline-block;
  order: 3;
  height: 100px;
  width: 130px;
  padding: 10px;
`;

const UpdateDiv = styled.div`
  margin: auto;
  border-left: 3px solid ${ ColorPalette.linksHover };  
  display: inline-block;
  order: 4;
  height: 100px;
  width: 320px;
`;

const TimeParagraph = styled.p`
  text-align: justify;		
  text-justify: inter-word;
  vertical-align: middle;
  horizontal-align: middle;
    
  font-famiy: Calibri Light;
	font-style: normal;
  font-size: 16px;
  color: ${ ColorPalette.primary };
`;

const Paragraph = styled.p`
  text-align: justify;		
  text-justify: inter-word;
  vertical-align: middle;
  horizontal-align: middle;
    
  font-famiy: Calibri Light;
	font-style: normal;
  font-size: 14px;
	color: #424242;
`;

const ParagraphForPicker = styled.p`
  text-align: justify;		
  text-justify: inter-word;
  vertical-align: middle;
  horizontal-align: middle;
    
  font-famiy: Calibri Light;
	font-style: normal;
  font-size: 14px;
	color: #424242;
`;

const Button = styled.button`  
  display: inline;  
  float: right;  
  margin-left: 50px;
  height: 25px;
  width: 100px;
  font-size: 13px;
  border-radius: 10px;
  
  &:hover {
    background-color: ${ ColorPalette.linksHover };
	}	
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
      <AppointmentListItemDiv>
        <TimeDiv>
          <TimeParagraph>Date: { this.state.date }</TimeParagraph>
          <TimeParagraph>Time: { this.state.time }</TimeParagraph>
        </TimeDiv>
        <InfoDiv>
          <Paragraph><b>Name:</b> { this.state.patient }</Paragraph>
          <Paragraph><b>Illness:</b> { this.state.illness }</Paragraph>
        </InfoDiv>
        <CancelDiv>
          <Paragraph><b>Cancel Appointment</b></Paragraph>
          <Button>Cancel</Button>
        </CancelDiv>
        <UpdateDiv>
          <ParagraphForPicker><b>Choose new:</b></ParagraphForPicker>
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
        </UpdateDiv>
      </AppointmentListItemDiv>
    );
  }
}

export default AppointmentListItem;