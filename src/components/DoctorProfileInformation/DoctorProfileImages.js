import React, { Component } from "react";
import styled from "styled-components";
import {
    Card,
    CardText,
    CardTitle
} from 'react-md';

const DoctorProfileImagesComponent = styled.div`
    margin: 20px;
`;

const Image = styled.div`

`;

class DoctorProfileImages extends Component {

  render() {
    return(
        <DoctorProfileImagesComponent>
            <Card>
                <CardTitle title="Praxis Photos"/>
                <CardText>
                    <Image>
                    <img src={this.props.images.praxisPic1} />
                </Image>
                <Image>
                    <img src={this.props.images.praxisPic2} />
                </Image>
                <Image>
                    <img src={this.props.images.praxisPic3} />
                </Image>
                <Image>
                    <img src={this.props.images.praxisPic4} />
                </Image>
                </CardText>
            </Card>
        </DoctorProfileImagesComponent>
    )
  }
}

export default DoctorProfileImages;

