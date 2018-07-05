import React, { Component } from "react";
import DoctorReviewsService from "../../services/DoctorReviewsService";
import DoctorProfileInformationService from "../../services/DoctorProfileInformationService";
import styled from "styled-components";
import ColorPalette from "../../constants/ColorPalette";

const DoctorRatingComponent = styled.div`
    div, .reviews, .material-icons {
        display: inline-block;
        vertical-align: middle;
    }
`;

class DoctorRating extends Component {

    constructor(props) {
        super(props);
        this.state = {
            reviews: [],
            doctorProfile: this.props.doctor
        };
    }

  renderStars() {
    let ratingIcons = [];
    let doctorRating = this.state.doctorProfile.services.rating;

    for (let rating = 0; rating < doctorRating; rating++) {
      ratingIcons.push(<i className="material-icons" style={{width: '24px', color: ColorPalette.primary}} key={rating}>star_rate</i>);
    }

    return ratingIcons;
  }

  render() {
        return (
            <DoctorRatingComponent>
                <div>{this.renderStars()}</div>
                <span className="reviews" style={{display: this.props.showNumber ? 'inline-block' : 'none' }}>({this.state.doctorProfile.services.rating} Reviews)</span>
            </DoctorRatingComponent>
        );
    }
}

export default DoctorRating;