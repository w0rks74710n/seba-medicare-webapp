import React, { Component } from "react";
import styled from "styled-components";
import ColorPalette from "../../constants/ColorPalette"

const RadioContainer = styled.div`
  margin-bottom: 5px;
`;

const RadioLabel = styled.label`
  display: block;
  position: relative;
  padding-left: 20px;
  font-size: 14px;
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
    border: 3px solid ${ ColorPalette.accent };
  }
`;

class FilterRadioButton extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return(
      <RadioContainer className="radio">
        <RadioLabel>
          <RadioButton type="radio" value={this.props.value}
                       checked={this.props.isSelected === this.props.value}
                       onChange={this.props.onClick}/>
          <RadioSpan/>
          {this.props.name}
        </RadioLabel>
      </RadioContainer>
    )
  }
}

export default FilterRadioButton
