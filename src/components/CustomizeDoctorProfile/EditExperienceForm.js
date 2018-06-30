import React, { Component } from "react";
import { TextField, Card, CardTitle, CardText, Cell, Button } from 'react-md';
import DoctorProfileInformationService from "../../services/DoctorProfileInformationService";

class EditExperienceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      experience: {
        areaOfSpecialization: this.props.experience.areaOfSpecialization,
        yearsOfExperience: this.props.experience.yearsOfExperience,
        previousExperiences: this.props.experience.previousExperiences,
        treatmentFocus: this.props.experience.treatmentFocus
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
  };

  render() {
    return(
      <Card>
        <CardTitle title={'Experience'} style={{paddingBottom: 0}}/>
        <CardText style={{paddingTop: 0}}>
          <form onSubmit={this.handleSubmit}>
            <TextField
              id="experience[areaOfSpecialization]"
              name="experience[areaOfSpecialization]"
              label="Area of Specialization"
              value={this.state.experience.areaOfSpecialization}
              onChange={(newValue) => this.setState({ experience: { ...this.state.experience, areaOfSpecialization: newValue}})}
              className="md-cell--top" />
            <TextField
              id="experience[yearsOfExperience]"
              name="experience[yearsOfExperience]"
              label="Years of Experience"
              type="number"
              value={this.state.experience.yearsOfExperience}
              onChange={(newValue) => this.setState({ experience: { ...this.state.experience, yearsOfExperience: newValue}})}
              className="md-cell--top" />
            <TextField
              id="experience[previousExperiences]"
              name="experience[previousExperiences]"
              label="Previous Experiences"
              rows={5}
              maxLength={5000}
              value={this.state.experience.previousExperiences}
              onChange={(newValue) => this.setState({ experience: { ...this.state.experience, previousExperiences: newValue}})}
              className="md-cell--top"
              helpText="Here you can describe which relevant achievements you have accomplished during your career, such
               as certifications, medical journal mentions and more."/>
            <TextField
              id="experience[treatmentFocus]"
              name="experience[treatmentFocus]"
              label="Treatment Focus"
              rows={3}
              maxLength={1000}
              value={this.state.experience.treatmentFocus}
              onChange={(newValue) => this.setState({ experience: { ...this.state.experience, treatmentFocus: newValue}})}
              className="md-cell--top"
              helpText="Here you can describe what are your treatment focuses"/>
            <Cell size={12} style={{textAlign: 'right'}}>
              <Button raised children="Submit" type="submit" />
            </Cell>
          </form>
        </CardText>
      </Card>
    );
  }
}

export default EditExperienceForm;
