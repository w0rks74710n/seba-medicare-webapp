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
    Text,
    Label
} from './Common.js';

const DoctorProfileExperienceComponent = styled.div`
    margin: 20px;

`;

class DoctorProfileExperience extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return(
        <DoctorProfileExperienceComponent>
            <Card>
                <CardTitle title="Experience"/>
                <CardText>
                    <Line>
                        <Label>
                            <Icon><FontIcon iconClassName="fa fa-plus" /></Icon>
                            Area of Specialization
                        </Label>
                        <Text>{this.props.experience.areaOfSpecialization}</Text>
                    </Line>
                    <Line>
                        <Label>
                            <Icon><FontIcon iconClassName="fa fa-plus" /></Icon>
                            Years of Experience
                        </Label>
                        <Text>{this.props.experience.yearsOfExperience}</Text>
                    </Line>
                    <Line>
                        <Label>
                            <Icon><FontIcon iconClassName="fa fa-plus" /></Icon>
                            Previous Experiences
                        </Label>
                        <Text>{this.props.experience.previousExperiences}</Text>
                    </Line>
                    <Line>
                        <Label>
                            <Icon><FontIcon iconClassName="fa fa-plus" /></Icon>
                            Treatment Focus
                        </Label>
                        <Text>{this.props.experience.treatmentFocus}</Text>
                    </Line>
                </CardText>
            </Card>
        </DoctorProfileExperienceComponent>
        )
    }
}

export default DoctorProfileExperience;

