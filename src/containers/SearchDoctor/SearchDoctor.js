import React, { Component } from "react";
import styled from "styled-components";

import { FilterSidebar, SearchDoctorList } from "../"

const SearchDoctorContainer = styled.div`
  width: 100%;
  display: inline-flex;
`;

class SearchDoctor extends Component {
    render() {
      return(
        <SearchDoctorContainer className={'searchDoctorContainer'}>
          <FilterSidebar />
          <SearchDoctorList />
        </SearchDoctorContainer>
      );
    }
}

export default SearchDoctor;