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
        return(
        <DoctorProfileReviewsComponent>
            <Card>
                <CardTitle title="Reviews"/>
                <CardText>
                    {JSON.stringify(this.props)} 
                </CardText>
            </Card>
        </DoctorProfileReviewsComponent>
        )
    }
}

export default DoctorProfileReviews;
