import React, { Component } from "react";
import styled from "styled-components";
import FilterTitle from "./FilterTitle";
import FilterRadioButton from "./FilterRadioButton";

const FilterInsuranceTypeComponent = styled.section`
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 10px;
`;

class FilterInsuranceType extends Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      isSelected: 'noPreference'
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      isSelected: event.target.value
    });
  }

  render() {
    return(
      <FilterInsuranceTypeComponent>
        <FilterTitle name={'Insurance Type'}/>
        <form>
          <FilterRadioButton value={'noPreference'} name={'No preference'} isSelected={this.state.isSelected} onClick={this.handleChange} />
          <FilterRadioButton value={'publicInsurance'} name={'Public Health Insurance'} isSelected={this.state.isSelected} onClick={this.handleChange} />
          <FilterRadioButton value={'privateInsurance'} name={'Private Health Insurance'} isSelected={this.state.isSelected} onClick={this.handleChange} />
        </form>
      </FilterInsuranceTypeComponent>
    )
  }
}

export default FilterInsuranceType