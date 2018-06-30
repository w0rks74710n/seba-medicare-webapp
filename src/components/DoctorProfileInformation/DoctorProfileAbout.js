import React, { Component } from "react";
import styled from "styled-components";
import {
    Card,
    CardText,
    CardTitle
  } from 'react-md';

const DoctorProfileAboutComponent = styled.div`
    display: inline-block;
    width: 450px;
    min-height: 250px;
    margin: 20px;

`;

class DoctorProfileAbout extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return(
        <DoctorProfileAboutComponent>
            <Card>
                <CardTitle title="About"/>
                <CardText>
                    {this.props.about.description} 
                </CardText>
            </Card>
        </DoctorProfileAboutComponent>
        )
    }
}

export default DoctorProfileAbout;
