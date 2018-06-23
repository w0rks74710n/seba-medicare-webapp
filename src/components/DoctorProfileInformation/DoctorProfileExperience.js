import React, { Component } from "react";
import styled from "styled-components";

const DoctorProfileExperienceComponent = styled.section`
    width: 900px;
    float: left;
    padding-left: 80px;
    margin: 20px;


`;

const SectionTitle = styled.section`
    font-size: 1.6em;
    font-weight: bold;
    border-bottom: 1px solid black;
`;

const SectionText = styled.section`

`;

const Item = styled.section`

`;

const ItemLabel = styled.section`

`;

const ItemValue = styled.section`

`;

class DoctorProfileExperience extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return(
        <DoctorProfileExperienceComponent>
            <SectionTitle>Experience</SectionTitle>
            <SectionText>
                <Item>
                    <ItemLabel>Area Of Specialization</ItemLabel>
                    <ItemValue>{this.props.experience.areaOfSpecialization}</ItemValue>
                </Item>
                <Item>
                    <ItemLabel>Years Of Experience</ItemLabel>
                    <ItemValue>{this.props.experience.yearsOfExperience}</ItemValue>
                </Item>
                <Item>
                    <ItemLabel>Previous Experiences</ItemLabel>
                    <ItemValue>{this.props.experience.previousExperiences}</ItemValue>
                </Item>
                <Item>
                    <ItemLabel>Treatment Focus</ItemLabel>
                    <ItemValue>{this.props.experience.treatmentFocus}</ItemValue>
                </Item>
            </SectionText>
        </DoctorProfileExperienceComponent>
        )
    }
}

export default DoctorProfileExperience;

