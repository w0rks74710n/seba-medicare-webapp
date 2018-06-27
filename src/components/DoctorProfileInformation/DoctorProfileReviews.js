import React, { Component } from "react";
import styled from "styled-components";
import {
    Card,
    CardText,
    CardTitle
  } from 'react-md';

const DoctorProfileReviewsComponent = styled.div`
    margin: 20px;
`;

class DoctorProfileReviews extends Component {

    constructor(props){
        super(props);
    }

    render() {

        let reviewsList = this.props.reviews.map((review) => {
            return (
                <li key={review.date.toString()}>{review.rating + " on " + review.date}<br/>{review.comment}</li>
            );
        });
    
        return(
        <DoctorProfileReviewsComponent>
            <Card>
                <CardTitle title="Reviews"/>
                <CardText>
                     <ul>{ reviewsList }</ul>
                </CardText>
            </Card>
        </DoctorProfileReviewsComponent>
        )
    }
}

export default DoctorProfileReviews;
