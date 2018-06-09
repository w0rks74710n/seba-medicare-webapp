import React, { Component } from 'react';
import photo from '../../resources/doc_photo.png';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ColorPalette from '../../constants/ColorPalette'

const PhotoDiv = styled.div`
  margin: 20px;
  border: 1px solid black;
  padding:1px;
  height: 138px;
  width:  138px;
`;

class Photo extends Component {
  render() {
    return (
      <Router>
        <PhotoDiv>
          <img src={photo} alt="Doctor Photo" />
        </PhotoDiv>
      </Router>
    );
  }
}

export default Photo;
