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

  constructor(props) {
    super(props);
    this.state = {
      // ToDo: Maybe use constants instead
      isInsuranceSelected: 'noPreference',
      isLanguageSelected: 'noPreference',
      isRadiusSelected: 'wholeArea',
      isRatingSelected: 'noPreference'
    };
  }

  handleInsuranceChange(event) {
    this.setState({
      isInsuranceSelected: event.target.value
    }, () => {
      this.props.retrieveFilterSidebarState(this.state)
    });
  }

  handleLanguageChange(event) {
    this.setState({
      isLanguageSelected: event.target.value
    }, () => {
      this.props.retrieveFilterSidebarState(this.state)
    });
  }

  handleRadiusChange(event) {
    this.setState({
      isRadiusSelected: event.target.value
    }, () => {
      this.props.retrieveFilterSidebarState(this.state)
    });
  }

  handleRatingChange(event) {
    this.setState({
      isRatingSelected: event.target.value
    }, () => {
      this.props.retrieveFilterSidebarState(this.state)
    });
  }

  render() {
    return(
      <FilterSidebarComponent>
        <FilterInsuranceType handleChange={ this.handleInsuranceChange.bind(this) } isSelected={ this.state.isInsuranceSelected } />
        <FilterLanguage handleChange={ this.handleLanguageChange.bind(this) } isSelected={ this.state.isLanguageSelected } />
        <FilterRadius handleChange={ this.handleRadiusChange.bind(this) } isSelected={ this.state.isRadiusSelected } />
        <FilterRating handleChange={ this.handleRatingChange.bind(this) } isSelected={ this.state.isRatingSelected }/>
      </FilterSidebarComponent>
    )
  }
}

export default FilterSidebar
