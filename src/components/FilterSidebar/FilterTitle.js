"use strict";

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const FilterTitleComponent = styled.h1`
  font-size: 1.5em;
  text-align: left;
  color: black;
  margin: 0;
`;

class FilterTitle extends Component {

  render() {
    return(
      <FilterTitleComponent>
        { this.props.name }
      </FilterTitleComponent>
    )
  }
}

export default FilterTitle