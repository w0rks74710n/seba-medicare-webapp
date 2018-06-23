import React, { Component } from "react";
import styled from "styled-components";
import ColorPalette from "../../constants/ColorPalette"

const AppointmentListItemDiv = styled.div`
  height: 100px;
  width: 160px;
  z-index: 1;
  margin: auto;
`;

const Paragraph = styled.p`
  text-align: justify;		
  text-justify: inter-word;
    
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
        <Paragraph>Patient name: { this.props.patientName }</Paragraph>
        <Paragraph>Illness: { this.props.illness }</Paragraph>
      </AppointmentListItemDiv>
    );
  }
}

export default AppointmentListItem;