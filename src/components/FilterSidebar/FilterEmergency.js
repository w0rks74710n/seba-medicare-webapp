import React, { Component } from "react";
import styled from "styled-components";
import FilterTitle from "./FilterTitle";
import FilterRadioButton from "./FilterRadioButton";

const FilterEmergencyComponent = styled.section`
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 10px;
`;

class FilterEmergency extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <FilterEmergencyComponent>
        <FilterTitle name={ 'Availability' }/>
        <form>
          <FilterRadioButton value={ 'noPreference' } name={ 'No preference' } isSelected={ this.props.isSelected } onClick={ this.props.handleChange } />
          <FilterRadioButton value={ '1' } name={ 'Available for emergencies' } isSelected={ this.props.isSelected } onClick={ this.props.handleChange } />
          <FilterRadioButton value={ '0' } name={ 'Not available for emergencies' } isSelected={ this.props.isSelected } onClick={ this.props.handleChange } />
        </form>
      </FilterEmergencyComponent>
    )
  }
}

export default FilterEmergency