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
  }

  render() {
    return(
      <FilterRatingComponent>
        <FilterTitle name={'Rating'}/>
        <form>
          <FilterRadioButton value={'noPreference'}
                             name={'No Preference'}
                             isSelected={this.props.isSelected}
                             onClick={this.props.handleChange} />
          <FilterRadioButton value={'1'}
                             name={[<i className="material-icons" key={1} style={{width: '24px'}}>star_rate</i>]}
                             isSelected={this.props.isSelected}
                             onClick={this.props.handleChange} />
          <FilterRadioButton value={'2'}
                             name={[<i className="material-icons" key={1} style={{width: '24px'}}>star_rate</i>,
                                    <i className="material-icons" key={2} style={{width: '24px'}}>star_rate</i>]}
                             isSelected={this.props.isSelected}
                             onClick={this.props.handleChange} />
          <FilterRadioButton value={'3'}
                             name={[<i className="material-icons" key={1} style={{width: '24px'}}>star_rate</i>,
                                    <i className="material-icons" key={2} style={{width: '24px'}}>star_rate</i>,
                                    <i className="material-icons" key={3} style={{width: '24px'}}>star_rate</i>]}
                             isSelected={this.props.isSelected}
                             onClick={this.props.handleChange} />
          <FilterRadioButton value={'4'}
                             name={[<i className="material-icons" key={1} style={{width: '24px'}}>star_rate</i>,
                                    <i className="material-icons" key={2} style={{width: '24px'}}>star_rate</i>,
                                    <i className="material-icons" key={3} style={{width: '24px'}}>star_rate</i>,
                                    <i className="material-icons" key={4} style={{width: '24px'}}>star_rate</i>]}
                             isSelected={this.props.isSelected}
                             onClick={this.props.handleChange} />
          <FilterRadioButton value={'5'}
                             name={[<i className="material-icons" key={1} style={{width: '24px'}}>star_rate</i>,
                                    <i className="material-icons" key={2} style={{width: '24px'}}>star_rate</i>,
                                    <i className="material-icons" key={3} style={{width: '24px'}}>star_rate</i>,
                                    <i className="material-icons" key={4} style={{width: '24px'}}>star_rate</i>,
                                    <i className="material-icons" key={5} style={{width: '24px'}}>star_rate</i>]}
                             isSelected={this.props.isSelected}
                             onClick={this.props.handleChange} />
        </form>
      </FilterRatingComponent>
    )
  }
}

export default FilterRating

