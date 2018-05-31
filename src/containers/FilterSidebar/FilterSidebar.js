"use strict";

import React, { Component } from 'react'
import styled from 'styled-components'
import FilterInsuranceType from "../../components/FilterSidebar/FilterInsuranceType";

const FilterSidebarComponent = styled.div`
  height: 100%;
  width: 250px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: WhiteSmoke;
  overflow-x: hidden;
  padding-top: 20px;
`;

class FilterSidebar extends Component {
  render() {
    return(
      <FilterSidebarComponent>
        <FilterInsuranceType/>
      </FilterSidebarComponent>
    )
  }
}

export default FilterSidebar