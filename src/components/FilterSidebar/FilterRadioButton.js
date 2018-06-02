import React, { Component } from 'react'
import styled from 'styled-components'

const RadioLabel = styled.label`
  display: block;
  position: relative;
  padding-left: 20px;
  font-size: 1em;
  &:hover span {
    border: 1px solid #BBBBBB;
  }
`;

const RadioSpan = styled.span`
  background: #FFFFFF;
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

class FilterRadioButton extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return(
      <div className="radio">
        <RadioLabel>
          <RadioButton type="radio" value={this.props.value}
                       checked={this.props.isSelected === this.props.value}
                       onChange={this.props.onClick}/>
          <RadioSpan/>
          {this.props.name}
        </RadioLabel>
      </div>
    )
  }
}

export default FilterRadioButton