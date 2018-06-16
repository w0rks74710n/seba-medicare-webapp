import React, { Component } from "react";
import { Header, Footer, FilterSidebar } from "../";

class Home extends Component {
  componentWillMount() {

  }

  render() {
    return (
      <div className="home">
        <Header />
        <FilterSidebar />
        <Footer />
      </div>
    )
  }
}

export default Home