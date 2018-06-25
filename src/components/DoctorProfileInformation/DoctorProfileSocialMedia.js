import React, { Component } from "react";
import styled from "styled-components";
import {
    Card,
    CardText,
    CardTitle
} from 'react-md';

const DoctorProfileSocialMediaComponent = styled.div`
    margin: 20px;

    a i {
            font-size: 2em;
        }
    }
`;

class DoctorProfileSocialMedia extends Component {
    
    renderSocialMedia() {
    let socialMediaIcons = [];
    let doctorSocialMedia = this.props.socialMedia;

    if (doctorSocialMedia.facebook !== "") {
        socialMediaIcons.push(
        <a href={doctorSocialMedia.facebook} key={0}>
            <i className="fa fa-facebook-official" style={{width: '24px', marginRight: '5px'}} />
        </a>
        )
    }

    if (doctorSocialMedia.xing !== "") {
        socialMediaIcons.push(
        <a href={doctorSocialMedia.xing} key={1}>
            <i className="fa fa-xing-square" style={{width: '24px', marginRight: '5px'}} />
        </a>
        )
    }

    if (doctorSocialMedia.linkedIn !== "") {
        socialMediaIcons.push(
        <a href={doctorSocialMedia.linkedIn} key={2}>
            <i className="fa fa-linkedin-square" style={{width: '24px', marginRight: '5px'}} />
        </a>
        )
    }

    return socialMediaIcons;

    }

    render() {
        return(
            <DoctorProfileSocialMediaComponent>
                <Card>
                    <CardTitle title="Social Media"/>
                    <CardText>
                            {this.renderSocialMedia()}
                    </CardText>
                </Card>
        </DoctorProfileSocialMediaComponent>
        )
    }
}

export default DoctorProfileSocialMedia;

