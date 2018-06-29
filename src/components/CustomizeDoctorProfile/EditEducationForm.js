import React, { Component } from "react";
import { TextField, Card, CardTitle, CardText, Cell, Button } from 'react-md';
import DoctorProfileInformationService from "../../services/DoctorProfileInformationService";

class EditEducationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      education: {
        university: this.props.education.university
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
       <CardTitle title={'Education'} style={{paddingBottom: 0}}/>
       <CardText style={{paddingTop: 0}}>
         <form onSubmit={this.handleSubmit}>
           <TextField
             id="education[university]"
             name="education[university]"
             label="University"
             value={this.state.education.university}
             onChange={(newValue) => this.setState({ education: { ...this.state.education, university: newValue}})}
             className="md-cell--top" />
           <Cell size={12}>
             <Button raised children="Submit" type="submit" />
           </Cell>
         </form>
       </CardText>
     </Card>
   );
  }
}

export default EditEducationForm;
