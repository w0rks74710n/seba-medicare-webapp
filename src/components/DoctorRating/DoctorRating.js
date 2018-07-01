import React, { Component } from "react";
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
    }

    renderStars() {
        let stars = [];
        for (let i = 0; i < this.props.avgRating; i++) {
            stars.push(
                <i key={i} className="material-icons" style={{width: '24px'}}>star_rate</i>
            );
        };
        return stars;
    };

    render() {
        return (
            <DoctorRatingComponent>
                <div>{this.renderStars()}</div>
                <span className="reviews" style={{display: this.props.showNumber ? 'inline-block' : 'none' }}>({this.props.totalRatings} Reviews)</span>
            </DoctorRatingComponent>
        );
    }
}

export default DoctorRating;