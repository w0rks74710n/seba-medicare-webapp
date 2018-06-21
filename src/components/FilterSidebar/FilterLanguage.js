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
  }

  render() {
    return(
      <FilterLanguageComponent>
        <FilterTitle name={'Language'}/>
        <form>
          <FilterRadioButton value={ 'noPreference' } name={ 'No preference' } isSelected={ this.props.isSelected } onClick={ this.props.handleChange } />
          <FilterRadioButton value={ 'english' } name={ 'English' } isSelected={ this.props.isSelected } onClick={ this.props.handleChange } />
          <FilterRadioButton value={ 'german' } name={ 'German' } isSelected={ this.props.isSelected } onClick={ this.props.handleChange } />
          <FilterRadioButton value={ 'french' } name={ 'French' } isSelected={ this.props.isSelected } onClick={ this.props.handleChange } />
          <FilterRadioButton value={ 'italian' } name={ 'Italian' } isSelected={ this.props.isSelected } onClick={ this.props.handleChange } />
        </form>
      </FilterLanguageComponent>
    )
  }
}

export default FilterLanguage