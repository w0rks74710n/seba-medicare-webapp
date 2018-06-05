import React, { Component } from "react";
import styled from "styled-components";
import FilterTitle from "./FilterTitle";
import FilterRadioButton from "./FilterRadioButton";

const FilterLanguageComponent = styled.section`
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 10px;
`;

class FilterLanguage extends Component {

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
      <FilterLanguageComponent>
        <FilterTitle name={'Language'}/>
        <form>
          <FilterRadioButton value={'noPreference'} name={'No preference'} isSelected={this.state.isSelected} onClick={this.handleChange} />
          <FilterRadioButton value={'english'} name={'English'} isSelected={this.state.isSelected} onClick={this.handleChange} />
          <FilterRadioButton value={'german'} name={'German'} isSelected={this.state.isSelected} onClick={this.handleChange} />
          <FilterRadioButton value={'french'} name={'French'} isSelected={this.state.isSelected} onClick={this.handleChange} />
          <FilterRadioButton value={'italian'} name={'Italian'} isSelected={this.state.isSelected} onClick={this.handleChange} />
        </form>
      </FilterLanguageComponent>
    )
  }
}

export default FilterLanguage