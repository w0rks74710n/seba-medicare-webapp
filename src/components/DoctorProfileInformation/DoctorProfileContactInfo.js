import React, { Component } from "react";
import styled from "styled-components";
import DoctorProfileSocialMedia from "./DoctorProfileSocialMedia";

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

const DoctorProfileContactInfoComponent = styled.section`
    display: inline-block;
    float: right;
    width: 450px;
    margin: 20px;
`;


class DoctorProfileContactInfo extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
        <DoctorProfileContactInfoComponent>
            <Card>
                <CardTitle title="Contact Information"></CardTitle>
                <CardText>
                    <Line>
                        <Icon><FontIcon iconClassName="fa fa-user-circle" /></Icon>
                        <Text>{this.props.contact.fullName}</Text>
                    </Line>
                    <Line>
                        <Icon><FontIcon iconClassName="fa fa-envelope" /></Icon>
                        <Text><a href={"mailto:" + this.props.contact.email}>{this.props.contact.email}</a></Text>
                    </Line>
                    <Line>
                        <Icon><FontIcon iconClassName="fa fa-phone" /></Icon>
                        <Text>{this.props.contact.mobile}</Text>
                    </Line>
                    <Line>
                        <Icon><FontIcon iconClassName="fa fa-globe" /></Icon>
                        <Text><a href={this.props.contact.practiceWebsite}>{this.props.contact.practiceWebsite}</a></Text>
                    </Line>
                    <Line>
                        <Icon><FontIcon iconClassName="fa fa-map-pin" /></Icon>
                        <Text>{this.props.contact.addressLine1}<br/>{this.props.contact.addressLine2}</Text>
                    </Line>
                    <Line>
                        <DoctorProfileSocialMedia socialMedia={this.props.socialMedia}/>
                    </Line>
                </CardText>
            </Card>
        </DoctorProfileContactInfoComponent>
        )
    }
}

export default DoctorProfileContactInfo;

