"use strict";

import React, { Component } from 'react'
import styled from 'styled-components'
import FilterTitle from "./FilterTitle";

const FilterInsuranceTypeComponent = styled.div`
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
`;

class FilterInsuranceType extends Component {
  render() {
    return(
      <FilterInsuranceTypeComponent>
        <FilterTitle name = { 'Insurance Type' }/>
      </FilterInsuranceTypeComponent>
    )
  }
}

export default FilterInsuranceType