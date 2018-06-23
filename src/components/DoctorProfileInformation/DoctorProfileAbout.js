import React, { Component } from "react";
import styled from "styled-components";

const DoctorProfileAboutComponent = styled.section`
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
    padding: 10px;
`;


class DoctorProfileAbout extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return(
        <DoctorProfileAboutComponent>
            <SectionTitle>About</SectionTitle>
            <SectionText>
                {this.props.about.description}
            </SectionText>
        </DoctorProfileAboutComponent>
        )
    }
}

export default DoctorProfileAbout;

