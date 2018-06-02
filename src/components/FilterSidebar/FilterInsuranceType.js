import React, { Component } from 'react'
import styled from 'styled-components'
import FilterTitle from "./FilterTitle";

const FilterInsuranceTypeComponent = styled.section`
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
`;

const RadioButtonForm = styled.form`
  
`;

const RadioLabel = styled.label`
  display: block;
  position: relative;
  padding-left: 20px;
  font-size: 1em;
  &:hover span {
    border: 1px solid #bbb;
  }
`;

const RadioSpan = styled.span`
  background: #fff;
  width: 14px;
  height: 14px;
  display: inline-block;
  border: 1px solid #eaeaea;
  position: absolute;
  top: 3px;
  left: 0;
  transition: all .2s linear;
`;

const RadioButton = styled.input`
  display: none;
  
  + span {
    border-radius: 50%;
  }
  
  &:checked + span {
    border: 3px solid #8BC34A;
  }
`;

class FilterInsuranceType extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)

    this.state = {
      selectedOption: 'noPreference'
    }
  }


  handleChange(event) {
    this.setState({
      selectedOption: event.target.value
    });
  }

  render() {
    return(
      <FilterInsuranceTypeComponent>
        <FilterTitle name = { 'Insurance Type' }/>
        <form>
          <div className="radio">
            <RadioLabel>
              <RadioButton type="radio" value="noPreference"
                     checked={this.state.selectedOption === 'noPreference'}
                     onChange={this.handleChange} />
              <RadioSpan/>
              No preference
            </RadioLabel>
          </div>
          <div className = "radio">
            <RadioLabel>
              <RadioButton type="radio" value="publicInsurance"
                     checked={this.state.selectedOption === 'publicInsurance'}
                     onChange={this.handleChange} />
              <RadioSpan/>
              Public Health Insurance
            </RadioLabel>
          </div>
          <div className="radio">
            <RadioLabel>
              <RadioButton type="radio"
                     value="privateInsurance"
                     checked={this.state.selectedOption === 'privateInsurance'}
                     onChange = {this.handleChange} />
              <RadioSpan/>
              Private Health Insurance
            </RadioLabel>
          </div>
        </form>
      </FilterInsuranceTypeComponent>
    )
  }
}

export default FilterInsuranceType