import React, { Component } from "react";
import styled from "styled-components";
import FilterTitle from "./FilterTitle";
import FilterRadioButton from "./FilterRadioButton";

const FilterRadiusComponent = styled.section`
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 10px;
`;

class FilterRadius extends Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      isSelected: 'wholeArea'
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
      <FilterRadiusComponent>
        <FilterTitle name={'Radius'}/>
        <form>
          <FilterRadioButton value={'wholeArea'} name={'Whole Area'} isSelected={this.state.isSelected} onClick={this.handleChange} />
          <FilterRadioButton value={'1'} name={'1 Km'} isSelected={this.state.isSelected} onClick={this.handleChange} />
          <FilterRadioButton value={'5'} name={'5 Km'} isSelected={this.state.isSelected} onClick={this.handleChange} />
          <FilterRadioButton value={'10'} name={'10 Km'} isSelected={this.state.isSelected} onClick={this.handleChange} />
          <FilterRadioButton value={'15'} name={'15 Km'} isSelected={this.state.isSelected} onClick={this.handleChange} />
        </form>
      </FilterRadiusComponent>
    )
  }
}

export default FilterRadius