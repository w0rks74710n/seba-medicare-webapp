import React, { Component } from "react";
import styled from "styled-components";

const DoctorProfileImagesComponent = styled.section`
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

const SectionContent = styled.section`

`;

const Image = styled.section`

`;


class DoctorProfileImages extends Component {

  render() {
    return(
      <DoctorProfileImagesComponent>
        <SectionTitle>Praxis Photos</SectionTitle>
            <SectionContent>
                <Image>
                    <img src="{this.props.images.profilePic}" />
                </Image>
                <Image>
                    <img src="{this.props.images.praxisPic1}" />
                </Image>
                <Image>
                    <img src="{this.props.images.praxisPic2}" />
                </Image>
                <Image>
                    <img src="{this.props.images.praxisPic3}" />
                </Image>
                <Image>
                    <img src="{this.props.images.praxisPic4}" />
                </Image>
            </SectionContent>
      </DoctorProfileImagesComponent>
    )
  }
}

export default DoctorProfileImages;

