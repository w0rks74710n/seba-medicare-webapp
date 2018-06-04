import React, { Component } from 'react';
import privacy from '../../resources/Privacy Policy.pdf';
import styled from 'styled-components';

const pdfObject = styled.object`
    max-width: 1000px;
    margin: auto;
    padding: 15px;
`;


class PrivacyPolicy extends Component {
    render() {
        return (
            <pdfObject data={privacy} type="document/pdf">
                <iframe src={privacy}></iframe>
            </pdfObject>
        );
    }
}

export default PrivacyPolicy;