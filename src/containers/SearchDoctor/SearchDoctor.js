import React, { Component } from "react";
import styled from "styled-components";

import { FilterSidebar, SearchDoctorList } from "../"

const SearchDoctorContainer = styled.div`
  width: 100%;
  display: inline-flex;
`;

class SearchDoctor extends Component {

  constructor(props) {
    super(props);
  }
  
  /**
   * Workflow looks as follows:
   * SearchDoctor -> FilterSidebar -> SingleFilters -> RadioButtons
   * The idea of this method is to retrieve the current state of all the filters contained in the sidebar.
   * The final goal is to be able to send a request to the MediCare backend to retrieve the filtered information
   * so that it can be passed to the SearchDoctorList later on (this will refresh the list with the new doctor data).
   *
   * @param filterSelection: this object will be populated with the current states of all the filters
   * */
  retrieveFilterSidebarState(filterSelection) {
    // ToDo: Here it's necessaty to execute a get request to the DoctorProfileInformationService and retrieve all the
    // ToDo: doctors that match the given filter criteria.
    console.log(filterSelection);
  }

  render() {
    return(
      <SearchDoctorContainer className={'searchDoctorContainer'}>
        <FilterSidebar retrieveFilterSidebarState={this.retrieveFilterSidebarState.bind(this)} />
        <SearchDoctorList />
      </SearchDoctorContainer>
    );
  }
}

export default SearchDoctor;