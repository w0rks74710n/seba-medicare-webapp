import React, { Component } from 'react';
import privacy from '../../resources/Privacy Policy.pdf';
import styled from 'styled-components';

const PDFDiv = styled.div`
  width: 1000px;
  display: flex;
  margin: auto;
  padding: 15px;
`;


const pdfObject = styled.object`
  width: 1000px;
  margin: auto;
`;

const IFrame = styled.iframe`
  width: 1000px;
  height: 800px;
  margin: auto;
`;

class PrivacyPolicy extends Component {
  render() {
    return (
      <PDFDiv>
        <pdfObject data={privacy} type="document/pdf">
          <IFrame src={privacy}></IFrame>
        </pdfObject>
      </PDFDiv>
    );
  }
}

export default PrivacyPolicy;