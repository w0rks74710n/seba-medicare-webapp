import React, { Component } from "react";
import { TextField, Card, CardTitle, CardText, Cell, Button } from 'react-md';
import DoctorProfileInformationService from "../../services/DoctorProfileInformationService";

class EditContactInformationForm extends Component {
  constructor(props) {
    super(props);
    this.state ={
      contactInformation: {
        fullName: this.props.contactInformation.fullName,
        email: this.props.contactInformation.email,
        mobile: this.props.contactInformation.mobile,
        practiceWebsite: this.props.contactInformation.practiceWebsite,
        addressLine1: this.props.contactInformation.addressLine1,
        addressLine2: this.props.contactInformation.addressLine2
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    DoctorProfileInformationService.updateDoctorProfile(this.state, this.props.id).then((response) => {
      response.successfullyUpdated ?
        alert('Profile updated successfully!') :
        alert('An error has happened while saving the data!');
    });
  }

  render(){
    return(
      <Card>
        <CardTitle title={'Contact Information'} style={{paddingBottom: 0}}/>
        <CardText style={{paddingTop: 0}}>
          <form onSubmit={this.handleSubmit}>
            <TextField
              id="contactInformation[fullName]"
              name="contactInformation[fullName]"
              label="Full Name"
              value={this.state.contactInformation.fullName}
              onChange={(newValue) => this.setState({ contactInformation: { ...this.state.contactInformation, fullName: newValue}})}
              className="md-cell--top" />
            <TextField
              id="contactInformation[email]"
              name="contactInformation[email]"
              label="E-mail"
              type="email"
              value={this.state.contactInformation.email}
              onChange={(newValue) => this.setState({ contactInformation: { ...this.state.contactInformation, email: newValue}})}
              className="md-cell--top" />
            <TextField
              id="contactInformation[mobile]"
              name="contactInformation[mobile]"
              label="Mobile"
              type="tel"
              value={this.state.contactInformation.mobile}
              onChange={(newValue) => this.setState({ contactInformation: { ...this.state.contactInformation, mobile: newValue}})}
              className="md-cell--top" />
            <TextField
              id="contactInformation[practiceWebsite]"
              name="contactInformation[practiceWebsite]"
              label="Practice Website"
              value={this.state.contactInformation.practiceWebsite}
              onChange={(newValue) => this.setState({ contactInformation: { ...this.state.contactInformation, practiceWebsite: newValue}})}
              className="md-cell--top" />
            <TextField
              id="contactInformation[addressLine1]"
              name="contactInformation[addressLine1]"
              label="Address Line 1"
              value={this.state.contactInformation.addressLine1}
              onChange={(newValue) => this.setState({ contactInformation: { ...this.state.contactInformation, addressLine1: newValue}})}
              className="md-cell--top" />
            <TextField
              id="contactInformation[addressLine2]"
              name="contactInformation[addressLine2]"
              label="Address Line 2"
              value={this.state.contactInformation.addressLine2}
              onChange={(newValue) => this.setState({ contactInformation: { ...this.state.contactInformation, addressLine2: newValue}})}
              className="md-cell--top" />
            <Cell size={12} style={{textAlign: 'right'}}>
              <Button raised children="Submit" type="submit" />
            </Cell>
          </form>
        </CardText>
      </Card>
    );
  }
}

export default EditContactInformationForm;