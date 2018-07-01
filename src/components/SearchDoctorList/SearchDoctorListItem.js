import React, { Component } from "react";
import styled from "styled-components";
import ReactTooltip from 'react-tooltip';
import ColorPalette from "../../constants/ColorPalette";
import DoctorRating from "../DoctorRating/DoctorRating";

const DoctorListItemComponent = styled.div`
    background-color: ${ColorPalette.primaryBackGorundContainer}
    box-shadow: 2px 1px 1px rgba(0,0,0,.2);
    display: inline-flex;
    height: 180px;
    margin: 0 10px 10px 10px;
    
    .item-head {
        display: inline-block;
        margin: 10px;
        padding: 10px; 
        img {
          height: 120px;
          width: 120px;
          border: 2px solid ${ColorPalette.accent};
          -webkit-border-radius: 500px;
        }
    }

    .item-body {
      display: inline-block;
      margin: 10px;
      padding: 10px;
        
      .info {
        .name {
          font-weight: bold;
            text-transform: uppercase;
         }

        .social-media-links {
          a {
            color: ${ ColorPalette.primaryDark };
          }
          font-size: 24px;
        }
      }

        .links {
          margin-top: 35px;
          a { 
            color: ${ ColorPalette.primary }
          }
        }
      }

    .item-view-link {
      display: inline-block;
      margin: auto;
      padding: 10px;
      vertical-align: middle;
    }
`;

class DoctorListItem extends Component {

  constructor(props) {
    super(props);
  }

  renderRatings() {
    let ratingIcons = [];
    let doctorRating = this.props.services.rating;

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
          <img src={ this.props.images.profilePic } alt=""/>
          <DoctorRating doctor={ this.props.doctor_id } 
                        avgRating={this.props.services.rating} 
                        showNumber={false}/>
        </div>
        <div className="item-body">
          <div className="info">
            <p className="name">{ this.props.contactInformation.fullName }</p>
            <p className="expertise">{ this.props.experience.areaOfSpecialization }</p>
            <p className="social-media-links">
              { this.renderSocialMedia() }
            </p>
          </div>
          <div className="links">
            <a href="#" data-tip={ this.props.services.languages }>Languages<ReactTooltip place="top" type="dark" effect="float"/></a> |
            <a href="#" data-tip={ this.props.services.emergencyAbailable ? 'Available for emergency calls':'Not available for emergency calls' }>
              Emergency Available<ReactTooltip place="top" type="dark" effect="float"/>
            </a> |
            <a href="#" data-tip={ this.props.services.onlineAppointmentAvailable ? 'Online appointment possible':'No online appointment possible' }>
              Online Appointment<ReactTooltip place="top" type="dark" effect="float"/>
            </a>
          </div>
        </div>
        <div className="item-view-link">
          <a href={'/doctor-profile/' + this.props.doctor_id }><i className="material-icons" style={{ width: '24px', color: ColorPalette.primary }}>keyboard_arrow_right</i></a>
        </div>
      </DoctorListItemComponent>
    );
  }
}

export default DoctorListItem;