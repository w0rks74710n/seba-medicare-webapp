import React, { Component } from "react";
import styled from "styled-components";

const DoctorProfileSocialMediaComponent = styled.section`
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

class DoctorProfileSocialMedia extends Component {

  render() {
    return(
        <DoctorProfileSocialMediaComponent>
            <SectionTitle>Social Media</SectionTitle>
            <SectionText>
                <Item>
                    <ItemLabel>Facebook</ItemLabel>
                    <ItemValue>{this.props.socialMedia.facebook}</ItemValue>
                </Item>
                <Item>
                    <ItemLabel>LinkedIn</ItemLabel>
                    <ItemValue>{this.props.socialMedia.linkedin}</ItemValue>
                </Item>
                <Item>
                    <ItemLabel>Xing</ItemLabel>
                    <ItemValue>{this.props.socialMedia.xing}</ItemValue>
                </Item>
            </SectionText>
      </DoctorProfileSocialMediaComponent>
    )
  }
}

export default DoctorProfileSocialMedia;

