import React, { Component } from "react";
import { Divider, Checkbox, Card, CardTitle, CardText, Cell, Button } from 'react-md';
import DoctorProfileInformationService from "../../services/DoctorProfileInformationService";

class EditMedicareServicesForm extends Component {
  constructor(props) {
    super(props);

    let languagesArray = this.props.services.languages ? this.props.services.languages.split(', ') :[];
    let insuranceArray = this.props.services.insuranceType ? this.props.services.insuranceType.split(', ') :[];

    this.state = {
      medicareServices: {
        services: {
          emergencyAvailable: this.props.services.emergencyAvailable,
          onlineAppointmentAvailable: this.props.services.onlineAppointmentAvailable,
          languages: this.props.services.languages,
          insuranceType: this.props.services.insuranceType
        }
      },
      languagesArray: languagesArray,
      insuranceArray: insuranceArray
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onEmergencyChanged(status) {
    let medicareServices = {...this.state.medicareServices};
    medicareServices.services.emergencyAvailable = status;
    this.setState({
      medicareServices: medicareServices
    }, () => {
      console.log(this.state.medicareServices);
    });
  }

  onAvailabilityChanged(status) {
    let medicareServices = {...this.state.medicareServices};
    medicareServices.services.onlineAppointmentAvailable = status;
    this.setState({
      medicareServices: medicareServices
    }, () => {
      console.log(this.state.medicareServices);
    });
  }

  onChangeLanguage(status, event) {
    let languagesArray = this.state.languagesArray;

    status ?
      languagesArray.push(event.target.value) :
      languagesArray.splice(languagesArray.indexOf(event.target.value), 1);

    let medicareServices = {...this.state.medicareServices};
    medicareServices.services.languages = this.capitalize(languagesArray.join(', '));

    this.setState({
      languagesArray: languagesArray,
      medicareServices: medicareServices
    }, () => {
      console.log(this.state.medicareServices);
    })
  }

  onInsuranceTypeChanged(status, event) {
    let insuranceArray = this.state.insuranceArray;

    status ?
      insuranceArray.push(event.target.value) :
      insuranceArray.splice(insuranceArray.indexOf(event.target.value), 1);

    let medicareServices = {...this.state.medicareServices};
    medicareServices.services.insuranceType = this.capitalize(insuranceArray.join(', '));

    this.setState({
      insuranceArray: insuranceArray,
      medicareServices: medicareServices
    }, () => {
      console.log(this.state.medicareServices);
    });
  }

  capitalize(s){
    return s.toLowerCase().replace( /\b./g, function(a){ return a.toUpperCase(); } );
  };

  handleSubmit(event) {
    event.preventDefault();
    DoctorProfileInformationService.updateDoctorProfile(this.state.medicareServices, this.props.id).then((response) => {
      response.successfullyUpdated ?
        alert('Profile updated successfully!') :
        alert('An error has happened while saving the data!');
    });
  };

  render() {
    return(
      <Card>
        <CardTitle title={'Medicare Services'} style={{paddingBottom: 0}}/>
        <CardText style={{paddingTop: 0}}>
          <form onSubmit={this.handleSubmit}>
            <h4 style={{margin: '0'}}>Insurance Types Accepted</h4>
            <Checkbox
              id="insuranceType[public]"
              name="insuranceType[public]"
              label="Public Insurance Type"
              checked={this.state.insuranceArray.includes('Public Insurance')}
              value={'Public Insurance'}
              onChange={this.onInsuranceTypeChanged.bind(this)}
              className="md-cell--top" />
            <Checkbox
              id="insuranceType[private]"
              name="insuranceType[private]"
              label="Private Insurance Type"
              checked={this.state.insuranceArray.includes('Private Insurance')}
              value={'Private Insurance'}
              onChange={this.onInsuranceTypeChanged.bind(this)}
              className="md-cell--top" />
            <Divider />
            <br />
            <h4 style={{margin: '0'}}>Availability Options</h4>
            <Checkbox
              id="services[emergencyAvailable]"
              name="services[emergencyAvailable]"
              label="Availability on Emergencies"
              checked={this.state.medicareServices.services.emergencyAvailable}
              value={'emergencyAvailable'}
              onChange={this.onEmergencyChanged.bind(this)}
              className="md-cell--top" />
            <Checkbox
              id="services[onlineAppointmentAvailable]"
              name="services[onlineAppointmentAvailable]"
              label="Availability for Online Appointments"
              checked={this.state.medicareServices.services.onlineAppointmentAvailable}
              value={'onlineAppointmentAvailable'}
              onChange={this.onAvailabilityChanged.bind(this)}
              className="md-cell--top" />
            <Divider />
            <br />
            <h4 style={{margin: '0'}}>Languages Offered</h4>
            <Checkbox
              id="languages[spanish]"
              name="languages[spanish]"
              checked={this.state.languagesArray.includes('Spanish')}
              label="Spanish"
              value={'Spanish'}
              onChange={this.onChangeLanguage.bind(this)}
              className="md-cell--top" />
            <Checkbox
              id="languages[english]"
              name="languages[english]"
              label="English"
              checked={this.state.languagesArray.includes('English')}
              value={'English'}
              onChange={this.onChangeLanguage.bind(this)}
              className="md-cell--top" />
            <Checkbox
              id="languages[french]"
              name="languages[french]"
              label="French"
              checked={this.state.languagesArray.includes('French')}
              value={'French'}
              onChange={this.onChangeLanguage.bind(this)}
              className="md-cell--top" />
            <Checkbox
              id="languages[italian]"
              name="languages[italian]"
              label="Italian"
              checked={this.state.languagesArray.includes('Italian')}
              value={'Italian'}
              onChange={this.onChangeLanguage.bind(this)}
              className="md-cell--top" />
            <Checkbox
              id="languages[german]"
              name="languages[german]"
              label="German"
              checked={this.state.languagesArray.includes('German')}
              value={'German'}
              onChange={this.onChangeLanguage.bind(this)}
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

export default EditMedicareServicesForm;
