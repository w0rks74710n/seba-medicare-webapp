import React, { Component } from "react";
import styled from "styled-components";
import FilterInsuranceType from "../../components/FilterSidebar/FilterInsuranceType";
import FilterLanguage from "../../components/FilterSidebar/FilterLanguage";
import FilterRadius from "../../components/FilterSidebar/FilterRadius";
import FilterRating from "../../components/FilterSidebar/FilterRating";
import ColorPalette from "../../constants/ColorPalette"

const FilterSidebarComponent = styled.div`
  height: 100%;
  width: 210px;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: ${ColorPalette.primaryBackGorundContainer};
  overflow-x: hidden;
  margin: 10px;
  border-radius: 2px;
  padding-top: 10px;
  padding-right: 10px;
  padding-left:10px;
  box-shadow: 2px 1px 1px rgba(0,0,0,.2)
`;

class FilterSidebar extends Component {
  render() {
    return(
      <FilterSidebarComponent>
        <FilterInsuranceType/>
        <FilterLanguage/>
        <FilterRadius/>
        <FilterRating/>
      </FilterSidebarComponent>
    )
  }
}

export default FilterSidebar
