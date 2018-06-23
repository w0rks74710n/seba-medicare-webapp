import React, { Component } from "react";
import styled from "styled-components";

const DoctorProfileContactInfoComponent = styled.section`
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

class DoctorProfileContactInfo extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
        <DoctorProfileContactInfoComponent>
            <SectionTitle>Contact Information</SectionTitle>
            <SectionText>
                <Item>
                    <ItemLabel>Full Name</ItemLabel>
                    <ItemValue>{this.props.contact.fullName}</ItemValue>
                </Item>
                <Item>
                    <ItemLabel>Email</ItemLabel>
                    <ItemValue>{this.props.contact.email}</ItemValue>
                </Item>
                <Item>
                    <ItemLabel>Mobile</ItemLabel>
                    <ItemValue>{this.props.contact.mobile}</ItemValue>
                </Item>
                <Item>
                    <ItemLabel>Website</ItemLabel>
                    <ItemValue>{this.props.contact.practiceWebsite}</ItemValue>
                </Item>
                <Item>
                    <ItemLabel>Address</ItemLabel>
                    <ItemValue>{this.props.contact.addressLine1 + ' ' + this.props.contact.addressLine2}</ItemValue>
                </Item>
            </SectionText>

        </DoctorProfileContactInfoComponent>
        )
    }
}

export default DoctorProfileContactInfo;

