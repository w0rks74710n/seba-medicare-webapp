import React, { Component } from "react";
import { TextField, Card, CardTitle, CardText, Cell, Button } from 'react-md';
import DoctorProfileInformationService from "../../services/DoctorProfileInformationService";

class EditSocialMediaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socialMedia: {
        facebook: this.props.socialMedia.facebook,
        linkedIn: this.props.socialMedia.linkedIn,
        xing: this.props.socialMedia.xing
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    DoctorProfileInformationService.updateDoctorProfile(this.state, this.props.id).then((response) => {
      response.successfullyUpdated ?
        alert('Profile updated successfully!') :
        alert('An error has happened while saving the data!');
    });
  };

  render() {
    return(
      <Card>
        <CardTitle title={'Social Media'} style={{paddingBottom: 0}}/>
        <CardText style={{paddingTop: 0}}>
          <form onSubmit={this.handleSubmit}>
            <TextField
              id="socialMedia[facebook]"
              name="socialMedia[facebook]"
              label="Facebook"
              value={this.state.socialMedia.facebook}
              onChange={(newValue) => this.setState({ socialMedia: { ...this.state.socialMedia, facebook: newValue}})}
              className="md-cell--top" />
            <TextField
              id="socialMedia[linkedIn]"
              name="socialMedia[linkedIn]"
              label="LinkedIn"
              value={this.state.socialMedia.linkedIn}
              onChange={(newValue) => this.setState({ socialMedia: { ...this.state.socialMedia, linkedIn: newValue}})}
              className="md-cell--top" />
            <TextField
              id="socialMedia[xing]"
              name="socialMedia[xing]"
              label="Xing"
              value={this.state.socialMedia.xing}
              onChange={(newValue) => this.setState({ socialMedia: { ...this.state.socialMedia, xing: newValue}})}
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

export default EditSocialMediaForm;
