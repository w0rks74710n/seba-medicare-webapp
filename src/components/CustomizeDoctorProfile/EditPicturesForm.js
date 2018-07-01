import React, { Component } from "react";
import { FileInput, TextField, Card, CardTitle, CardText, Cell, Button } from 'react-md';
import UploadFileService from '../../services/UploadFileService'
import DoctorProfileInformationService from '../../services/DoctorProfileInformationService'


class EditPicturesForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      fileName: '',
      profilePictures: {
        images: {
          profilePic: this.props.images.profilePic,
          praxisPic1: this.props.images.praxisPic1,
          praxisPic2: this.props.images.praxisPic2,
          praxisPic3: this.props.images.praxisPic3,
          praxisPic4: this.props.images.praxisPic4
        }
      }
    };
    this.handleImageUpload = this.handleImageUpload.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(file) {
    this.setState({file: file, fileName: file.name}, () => {
      console.log(this.state);
    })
  }

  handleImageUpload(event) {
    event.preventDefault();
    let formDataFile = new FormData();
    formDataFile.append('file', this.state.file);
    UploadFileService.uploadImage(formDataFile).then((res) => {
      if (res.success) {
        let profilePictures = this.state.profilePictures;
        profilePictures.images.profilePic = 'http://localhost:3001/api/uploads/' + res.fileName;
        this.setState({
          profilePictures: profilePictures
        }, () => {
          DoctorProfileInformationService.updateDoctorProfile(this.state.profilePictures, this.props.id).then((res) => {
            res.successfullyUpdated ?
              this.props.success('Success', 'Profile picture updated successfully') :
              this.props.success('Error', 'An error occurred while saving the data! Please contact support.')
          })
        });
      }
    }).catch((error) => {
      console.log(error);
    })
  }

  render() {
    return(
      <Card>
        <CardTitle title={'Images'} style={{paddingBottom: 0}}/>
        <CardText style={{paddingTop: 0}}>
          <form onSubmit={this.handleImageUpload}>
            <FileInput
              id="file"
              name="file"
              label="Choose file"
              accept="image/*"
              onChange={this.onChange}
              className="file-inputs__upload-form__file-upload"
              primary
              iconBefore
            />
            <TextField
              id="file-upload-input"
              name="file-upload-input"
              placeholder="No file chosen"
              className="file-inputs__upload-form__file-field"
              value={this.state.fileName}
              readOnly
              fullWidth={true}
            />
            <Cell size={12} style={{textAlign: 'right'}}>
              <Button raised children="Submit" type="submit" />
            </Cell>
          </form>
        </CardText>
      </Card>
    );
  }
}

export default EditPicturesForm;
