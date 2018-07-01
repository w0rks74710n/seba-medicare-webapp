import React, { Component } from "react";
import DoctorReviewsService from "../../services/DoctorReviewsService";
import DoctorProfileInformationService from "../../services/DoctorProfileInformationService";
import styled from "styled-components";

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
            doctorProfile: null
        };
    }

    renderStars() {

    };

    render() {
        return (
            <DoctorRatingComponent>
                <div>{this.renderStars()}</div>
                <span className="reviews" style={{display: this.props.showNumber ? 'inline-block' : 'none' }}>({this.state.reviews.length} Reviews)</span>
            </DoctorRatingComponent>
        );
    }
}

export default DoctorRating;