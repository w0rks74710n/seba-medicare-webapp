import React, { Component } from 'react';
import styled from 'styled-components';

const Article = styled.article`
    max-width: 1000px;
    margin: auto;
    padding: 15px;
`;

const Title = styled.h3`
    font-famiy: Calibri Light;
	font-style: bold;
    font-size: 20px;
	color: #424242;
	
    text-indent: 40px;
`;

const Sub_Title = styled.h4`
    font-famiy: Calibri Light;
	font-style: bold;
    font-size: 15px;
	color: #424242;
	
    text-indent: 25px;
`;

const Paragraph = styled.p`
    text-align: justify;		
    text-justify: inter-word;
    
    font-famiy: Calibri Light;
	font-style: normal;
    font-size: 14px;
	color: #424242;
`;

class TermsAndConditions extends Component {
    render() {
        return (
            <Article>
                <Title>
                    <h3>Terms and Conditions</h3>
                </Title>
                <Paragraph>
                    Last updated: (01.06.2018)
                </Paragraph>
                <Paragraph>
                    Please read these Terms and Conditions ("Terms", "Terms and Conditions")
                    carefully before using the http://www.medicare.com website and the MediCare
                    App mobile application (the "Service") operated by MediCare Company.
                </Paragraph>
                <Paragraph>
                    Your access to and use of the Service is conditioned on your acceptance of
                    and compliance with these Terms. These Terms apply to all visitors, users
                    and others who access or use the Service.
                </Paragraph>
                <Paragraph>
                    By accessing or using the Service you agree to be bound by these Terms.
                    If you disagree with any part of the terms then you may not access the Service.
                </Paragraph>
                <Sub_Title>Subscriptions</Sub_Title>
                <Paragraph>
                    Some parts of the Service are billed on a subscription basis. You will be billed
                    in advance based on a subscription model that is applied for Doctors. Some additional
                    features on the doctor dashboard will be provided only to premium doctor accounts.
                </Paragraph>
                <Sub_Title>Content</Sub_Title>
                <Paragraph>
                    Our Service allows you to post, link, store, share and otherwise make available certain
                    information, text, graphics, videos, or other material ("Content"). You are responsible
                    for the any of these shares.
                </Paragraph>
                <Sub_Title>Links To Other Web Sites</Sub_Title>
                <Paragraph>
                    Our Service may contain links to third-party web sites or services that are not owned
                    or controlled by MediCare Company.
                </Paragraph>
                <Paragraph>
                    MediCare Company has no control over, and assumes no responsibility for, the content,
                    privacy policies, or practices of any third party web sites or services. You further
                    acknowledge and agree that MediCare Company shall not be responsible or liable, directly
                    or indirectly, for any damage or loss caused or alleged to be caused by or in connection
                    with use of or reliance on any such content, goods or services available on or through
                    any such web sites or services.
                </Paragraph>
                <Sub_Title>Changes</Sub_Title>
                <Paragraph>
                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time.
                    If a revision is material we will try to provide at least 30 days' notice prior to any new
                    terms taking effect. What constitutes a material change will be determined at our sole discretion.
                </Paragraph>
                <Sub_Title>Contact Us</Sub_Title>
                <Paragraph>
                    If you have any questions about these Terms, please contact us.
                </Paragraph>
            </Article>
        );
    }
}

export default TermsAndConditions;