import React, { Component } from "react";
import styled from "styled-components";
import Header from "../../components/HomePage/Header";
import Footer from "../../components/HomePage/Footer";
import { HomeContent} from "../";

const PageContainer = styled.div`
    width: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
    height: 100%;
`;

class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            doctorQuery: this.props.doctorQuery,
            placeQuery: this.props.placeQuery
        }
    }

  render() {
    return(
      <PageContainer>
        <Header />
        <HomeContent searchQueryForDoctor={this.state.doctorQuery} searchQueryForPlace={this.state.placeQuery} />
        <Footer />
      </PageContainer>
    );
  }
}

export default Home