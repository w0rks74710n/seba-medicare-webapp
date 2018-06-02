import React, { Component } from 'react'
import styled from 'styled-components'

const FilterTitleComponent = styled.h1`
  font-size: 1.5em;
  text-align: left;
  color: black;
  margin: 0 0 5px 0;
  border-bottom: 1px solid #bbb;
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