import React, { Component } from "react";
import styled from "styled-components";
import ColorPalette from "../../constants/ColorPalette"


class DoctorListItem extends Component {

  constructor(props) {
    super(props);
  }

  renderRatings() {
    let ratingIcons = [];
    let doctorRating = Math.round(this.props.rating);

    for (let rating = 0; rating < doctorRating; rating++) {
      ratingIcons.push(<i className="material-icons" style={{width: '24px', color: ColorPalette.primary}} key={rating}>star_rate</i>);
    }

    return ratingIcons;
  }

  renderSocialMedia() {
    let socialMediaIcons = [];
    let doctorSocialMedia = this.props.socialMedia;

    if (doctorSocialMedia.facebook !== "") {
      socialMediaIcons.push(
        <a href={doctorSocialMedia.facebook} key={0}>
          <i className="fa fa-facebook-official" style={{width: '24px', marginRight: '5px'}} />
        </a>
      )
    }

    if (doctorSocialMedia.xing !== "") {
      socialMediaIcons.push(
        <a href={doctorSocialMedia.xing} key={1}>
          <i className="fa fa-xing-square" style={{width: '24px', marginRight: '5px'}} />
        </a>
      )
    }

    if (doctorSocialMedia.linkedIn !== "") {
      socialMediaIcons.push(
        <a href={doctorSocialMedia.linkedIn} key={2}>
          <i className="fa fa-linkedin-square" style={{width: '24px', marginRight: '5px'}} />
        </a>
      )
    }

    return socialMediaIcons;

  }

  render() {
    return (
      <DoctorListItemComponent>
        <div className="item-head">
          <img src={ this.props.profilePicture } alt=""/>
          <div className="rating">
            { this.renderRatings() }
          </div>
        </div>
        <div className="item-body">
          <div className="info">
            <p className="name">{ this.props.name }</p>
            <p className="expertise">{ this.props.areaOfSpecialization }</p>
            <p className="social-media-links">
              { this.renderSocialMedia() }
            </p>
          </div>
          <div className="links">
            <a href="#" data-tip={ this.props.languages }>Languages<ReactTooltip place="top" type="dark" effect="float"/></a> |
            <a href="#" data-tip={ this.props.emergency }>Emergency Available<ReactTooltip place="top" type="dark" effect="float"/></a> |
            <a href="#" data-tip={ this.props.onlineAppointment }>Online Appointment<ReactTooltip place="top" type="dark" effect="float"/></a>
          </div>
        </div>
        <div className="item-view-link">
          <a href={'/doctorProfile/' + this.props.doctor_id }><i className="material-icons" style={{ width: '24px', color: ColorPalette.primary }}>keyboard_arrow_right</i></a>
        </div>
      </DoctorListItemComponent>
    );
  }
}

export default DoctorListItem;