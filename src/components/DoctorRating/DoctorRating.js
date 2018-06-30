import React, { Component } from "react";
import DoctorReviewsService from "../../services/DoctorReviewsService";
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
            reviews: []
        };
    }

    renderStars() {
        DoctorReviewsService.getReviews(this.props.doctor).then( data => {
        this.setState({
            reviews: data.review
        });
        }).catch( error => {
            console.log(error);
        });
        var avgRating = 0;
        for(var i = 0; i < this.state.reviews.length; i++)
            avgRating += this.state.reviews[i].rating;
        avgRating /= this.state.reviews.length;
        let stars = [];
        for (let i = 0; i < avgRating; i++) {
            stars.push(
                <i className="material-icons" style={{width: '24px'}}>star_rate</i>
            );
        };
        return stars;
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