import React, { Component } from "react";
import styled from "styled-components";
import DoctorProfileInformationService from "../../services/DoctorProfileInformationService"

import { FilterSidebar, SearchDoctorList } from "../"

const SearchDoctorContainer = styled.div`
  width: 100%;
  display: inline-flex;
`;

class SearchDoctor extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      data: []
    };
  }

  componentWillMount(){
    this.setState({
      loading: true
    });

    DoctorProfileInformationService.getDoctorProfiles().then((data) => {
      this.setState({
        data: data,
        loading: false
      });
    }).catch((e) => {
      console.error(e);
    });
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
    // ToDo: Here it's necessary to execute a get request to the DoctorProfileInformationService and retrieve all the
    // ToDo: doctors that match the given filter criteria.
    console.log(filterSelection);
  }

  render() {
    if (this.state.loading) {
      return (<h2>Loading...</h2>);
    }

    return(
      <SearchDoctorContainer className={'searchDoctorContainer'}>
        <FilterSidebar retrieveFilterSidebarState={this.retrieveFilterSidebarState.bind(this)} />
        <SearchDoctorList data={this.state.data} />
      </SearchDoctorContainer>
    );
  }
}

export default SearchDoctor;
