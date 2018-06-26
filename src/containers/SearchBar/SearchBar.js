import React, { Component } from 'react';
import styled from "styled-components";

const SearchBarContainer = styled.div`
  display: inline-block;
  width: 700px;
  margin: 10px;   
  background-color:green; 
`;

class SearchBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SearchBarContainer>
                hello
            </SearchBarContainer>
        );
    }
}

export default SearchBar;