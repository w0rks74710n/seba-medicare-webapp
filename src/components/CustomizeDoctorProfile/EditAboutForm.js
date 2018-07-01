import React, { Component } from "react";
import { TextField, Card, CardTitle, CardText, Cell, Button } from 'react-md';
import DoctorProfileInformationService from "../../services/DoctorProfileInformationService";

class EditAboutForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      about: this.props.about
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    DoctorProfileInformationService.updateDoctorProfile(this.state, this.props.id).then((res) => {
      res.successfullyUpdated ?
        this.props.success('Success', 'Profile updated successfully') :
        this.props.success('Error', 'An error occurred while saving the data! Please contact support.')
    });
  }

  render() {
    return(
      <Card>
        <CardTitle title={'About'} style={{paddingBottom: 0}}/>
        <CardText style={{paddingTop: 0}}>
          <form onSubmit={this.handleSubmit}>
            <TextField
              id="about[description]"
              name="about[description]"
              label="Description"
              rows={3}
              value={this.state.about.description}
              onChange={(newValue) => this.setState({about: { description: newValue}})}
              maxLength={2000}
              className="md-cell--top"
              helpText="Here you can enter a short description about yourself, your practice, your interests and anything you consider relevant for the visitors of your profile."
            />
            <Cell size={12} style={{textAlign: 'right'}}>
              <Button raised children="Submit" type="submit" />
            </Cell>
          </form>
        </CardText>
      </Card>
    );
  };
}

export default EditAboutForm;
