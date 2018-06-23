import React, { Component } from "react";
import styled from "styled-components";

const DoctorProfileEducationComponent = styled.section`
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

class DoctorProfileEducation extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
        <DoctorProfileEducationComponent>
            <SectionTitle>Education</SectionTitle>
            <SectionText>
                <Item>
                    <ItemLabel>University</ItemLabel>
                    <ItemValue>{this.props.education.university}</ItemValue>
                </Item>
            </SectionText>
        </DoctorProfileEducationComponent>
        )
    }
}

export default DoctorProfileEducation;

