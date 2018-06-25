import React, { Component } from "react";
import styled from "styled-components";
import {
    Card,
    CardText,
    CardTitle,
    FontIcon
  } from 'react-md';

import {
    Line,
    Icon,
    Text
} from './Common.js';

const DoctorProfileEducationComponent = styled.section`
    margin: 20px;

`;

class DoctorProfileEducation extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
        <DoctorProfileEducationComponent>
            <Card>
                <CardTitle title="Education"/>
                <CardText>
                    <Line>
                        <Icon><FontIcon iconClassName="fa fa-university" /></Icon>
                        <Text>{this.props.education.university}</Text>
                    </Line>
                </CardText>
            </Card>
        </DoctorProfileEducationComponent>
        )
    }
}

export default DoctorProfileEducation;

