import React, { Component } from "react";
import styled from "styled-components";
import FilterInsuranceType from "../../components/FilterSidebar/FilterInsuranceType";
import FilterLanguage from "../../components/FilterSidebar/FilterLanguage";
import FilterEmergency from "../../components/FilterSidebar/FilterEmergency";
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
      isEmergencySelected: 'noPreference',
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

  handleEmergencyChange(event) {
    this.setState({
      isEmergencySelected: event.target.value
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
        <FilterEmergency handleChange={ this.handleEmergencyChange.bind(this) } isSelected={ this.state.isEmergencySelected } />
        <FilterRating handleChange={ this.handleRatingChange.bind(this) } isSelected={ this.state.isRatingSelected }/>
      </FilterSidebarComponent>
    )
  }
}

export default FilterSidebar
