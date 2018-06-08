import React, { Component } from "react";
import styled from "styled-components";
import FilterTitle from "./FilterTitle";
import FilterRadioButton from "./FilterRadioButton";

const FilterRatingComponent = styled.section`
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 10px;
`;

class FilterRating extends Component {

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
      <FilterRatingComponent>
        <FilterTitle name={'Rating'}/>
        <form>
          <FilterRadioButton value={'noPreference'}
                             name={'No Preference'}
                             isSelected={this.state.isSelected}
                             onClick={this.handleChange} />
          <FilterRadioButton value={'1'}
                             name={[<i className="material-icons" key={1} style={{width: '24px'}}>star_rate</i>]}
                             isSelected={this.state.isSelected}
                             onClick={this.handleChange} />
          <FilterRadioButton value={'2'}
                             name={[<i className="material-icons" key={2} style={{width: '24px'}}>star_rate</i>,
                                    <i className="material-icons" key={3} style={{width: '24px'}}>star_rate</i>]}
                             isSelected={this.state.isSelected}
                             onClick={this.handleChange} />
          <FilterRadioButton value={'3'}
                             name={[<i className="material-icons" style={{width: '24px'}}>star_rate</i>,
                                    <i className="material-icons" style={{width: '24px'}}>star_rate</i>,
                                    <i className="material-icons" style={{width: '24px'}}>star_rate</i>]}
                             isSelected={this.state.isSelected}
                             onClick={this.handleChange} />
          <FilterRadioButton value={'4'}
                             name={[<i className="material-icons" style={{width: '24px'}}>star_rate</i>,
                                    <i className="material-icons" style={{width: '24px'}}>star_rate</i>,
                                    <i className="material-icons" style={{width: '24px'}}>star_rate</i>,
                                    <i className="material-icons" style={{width: '24px'}}>star_rate</i>]}
                             isSelected={this.state.isSelected}
                             onClick={this.handleChange} />
          <FilterRadioButton value={'5'}
                             name={[<i className="material-icons" style={{width: '24px'}}>star_rate</i>,
                                    <i className="material-icons" style={{width: '24px'}}>star_rate</i>,
                                    <i className="material-icons" style={{width: '24px'}}>star_rate</i>,
                                    <i className="material-icons" style={{width: '24px'}}>star_rate</i>,
                                    <i className="material-icons" style={{width: '24px'}}>star_rate</i>]}
                             isSelected={this.state.isSelected}
                             onClick={this.handleChange} />
        </form>
      </FilterRatingComponent>
    )
  }
}

export default FilterRating

