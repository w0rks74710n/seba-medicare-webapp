import React, { Component } from "react";
import styled from "styled-components";
import Header from "../../components/HomePage/Header";
import Footer from "../../components/HomePage/Footer";
import SearchBar from '../SearchBarAndBreadCrumbs/SearchBar';
import { HomeContent } from "../";

const PageContainer = styled.div`
    width: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
    height: 100%;
`;

class Home extends Component {
  render() {
    return(
      <PageContainer>
        <Header />
          <SearchBar/>
        <HomeContent />
        <Footer />
      </PageContainer>
    );
  }
}

export default Home