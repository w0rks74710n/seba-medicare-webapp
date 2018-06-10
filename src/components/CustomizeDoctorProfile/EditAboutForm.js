import React, { Component } from "react";
import styled from "styled-components";
import { TextField, Card, CardTitle, CardText, Cell, Button } from 'react-md';

class EditAboutForm extends Component {
  render() {
    return(
      <Card>
        <CardTitle title={'About'} style={{paddingBottom: 0}}/>
        <CardText style={{paddingTop: 0}}>
          <TextField
            id="floating-label-focus-help-text-field"
            label="Description"
            rows="3"
            maxLength={2000}
            className="md-cell--top"
            helpText="Here you can enter a short description about yourself, your practice, your interests and anything you consider relevant for the visitors of your profile."
          />
          <Cell size={12}>
            <Button raised>Save</Button>
          </Cell>
        </CardText>
      </Card>
    );
  }
}