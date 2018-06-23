import React, { Component } from "react";
import styled from "styled-components";
import ColorPalette from "../../constants/ColorPalette"

const AppointmentListItemDiv = styled.div`
  display: inline-flex;
  border: 1px solid ${ ColorPalette.linksHover };
  box-shadow: 2px 1px 1px rgba(0,0,0,.2);
  height: 100px;
  width: 450px;
  margin: auto;
  margin-top: 10px;
`;

const TimeDiv = styled.div`
  margin: auto;
  display: inline-block;
  order: 1;
  height: 100px;
  width: 150px;
  z-index: 1;
  padding: 10px;
  
  &:hover {
    background-color: ${ ColorPalette.linksHover };
	}	
`;

const InfoDiv = styled.div`
  margin: auto;
  border-left: 3px solid ${ ColorPalette.linksHover };  
  display: inline-block;
  order: 2;
  height: 100px;
  width: 300px;
  z-index: 1;
  padding: 10px;
  
  &:hover {
    background-color: ${ ColorPalette.linksHover };
	}	
`;

const TimeParagraph = styled.p`
  text-align: justify;		
  text-justify: inter-word;
  vertical-align: middle;
    
  font-famiy: Calibri Light;
	font-style: normal;
  font-size: 16px;
  color: ${ ColorPalette.primary };
`;

const Paragraph = styled.p`
  text-align: justify;		
  text-justify: inter-word;
  vertical-align: middle;
    
  font-famiy: Calibri Light;
	font-style: normal;
  font-size: 14px;
	color: #424242;
`;

class AppointmentListItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date: this.props.date,
      time: this.props.time
    };
  }

  render() {
    return (
      <AppointmentListItemDiv>
        <TimeDiv>
          <TimeParagraph>Date: { this.props.date }</TimeParagraph>
          <TimeParagraph>Time: { this.props.time }</TimeParagraph>
        </TimeDiv>
        <InfoDiv>
          <Paragraph><b>Name:</b> { this.props.patientName }</Paragraph>
          <Paragraph><b>Illness:</b> { this.props.illness }</Paragraph>
        </InfoDiv>
      </AppointmentListItemDiv>
    );
  }
}

export default AppointmentListItem;