import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form';
import { TextField, Card, CardTitle, CardText, Cell, Button } from 'react-md';

class EditAboutForm extends Component {

  constructor(props) {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit = values => {
    console.log('values:', values);
  };

  render() {
    return(
      <Card>
        <CardTitle title={'About'} style={{paddingBottom: 0}}/>
        <CardText style={{paddingTop: 0}}>
          <form onSubmit={this.handleSubmit}>
            <TextField
              id="floating-label-focus-help-text-field"
              label="Description"
              rows={3}
              maxLength={2000}
              className="md-cell--top"
              helpText="Here you can enter a short description about yourself, your practice, your interests and anything you consider relevant for the visitors of your profile."
            />
            <Cell size={12}>
              <Button raised children="Submit" type="submit" />
            </Cell>
          </form>
        </CardText>
      </Card>
    );
  }
}


export default reduxForm({
  form: 'about' // a unique identifier for this form
})(EditAboutForm)