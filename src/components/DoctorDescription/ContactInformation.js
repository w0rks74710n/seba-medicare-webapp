import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ColorPalette from '../../constants/ColorPalette'

const ContactDiv = styled.div`
  margin: 5px;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-flow: column;		
`;

const Title = styled.h6`
  margin: 0px;
  margin-bottom: 3px;
  padding: 0px;
	font-style: bold;
  font-size: 16px;
	color: ${ ColorPalette.primaryDark };
`;

const ContactItem = styled.p`
  margin: 0px;
  padding: 0px;
	font-style: normal;
  font-size: 14px;
	color: ${ ColorPalette.primaryDark };
`;

class ContactInformation extends Component {
  render() {
    return (
      <Router>
        <ContactDiv>
          <Title>Contact</Title>
          <ContactItem>Felsennelkenanger 19</ContactItem>
          <ContactItem>80937, Munich</ContactItem>
          <ContactItem>+4917669771594</ContactItem>
          <ContactItem>+905309263180</ContactItem>
        </ContactDiv>
      </Router>
    );
  }
}

export default ContactInformation;