  import React, { Component } from 'react';
  import privacy from '../../resources/Privacy Policy.pdf';
  import styled from 'styled-components';
  import { Header, Footer } from '../';

  const pdfObject = styled.object`
    max-width: 1000px;
    margin: auto;
    padding: 15px;
  `;


  class PrivacyPolicy extends Component {
    render() {
      return (
        <div className="privacyPolicy">
          <Header />
          <pdfObject data={privacy} type="document/pdf">
            <iframe src={privacy}></iframe>
          </pdfObject>
          <Footer />
        </div>
      );
    }
  }

  export default PrivacyPolicy;