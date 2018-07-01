import React, { Component } from "react";
import styled from "styled-components";
import {
    Card,
    CardText,
    CardTitle,
    Divider
  } from 'react-md';

const DoctorProfileReviewsComponent = styled.div`
    margin: 20px;

    .stars, .date {
        display: inline-block;
        margin: 10px;
    }

    .date {
        float: right;
        vertical-align: middle;
        font-style: italic;
    }

    .comment {
        font-size: 1.2em;
        padding: 5px 15px 15px 15px;
    }
`;

class DoctorProfileReviews extends Component {
    constructor(props){
        super(props);
    }

    render() {
        let reviewsList = this.props.reviews.map((review) => {
            let renderStars = function() {
                let stars = [];
                for (let i = 0; i < review.rating; i++) {
                    stars.push(
                        <i key={i} className="material-icons" style={{width: '24px'}}>star_rate</i>
                    );
                }
                return stars;
            };

            return (
                <div className="review" key={review.date.toString()}>
                    <div className="stars">{renderStars()}</div>
                    <div className="date">Review done on {review.date.split('T')[0]} at {(review.date.split('T')[1]).split(':')[0]}:{(review.date.split('T')[1]).split(':')[1]}</div>
                    <div className="comment">{review.comment}</div>
                    <Divider/>
                </div>
            );
        });
    
        return(
        <DoctorProfileReviewsComponent>
            <Card>
                <CardTitle title="Reviews"/>
                <CardText>
                    <ul>{reviewsList}</ul>
                </CardText>
            </Card>
        </DoctorProfileReviewsComponent>
        )
    }
}

export default DoctorProfileReviews;
