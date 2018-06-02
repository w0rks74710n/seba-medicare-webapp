import React, { Component } from "react";
import { FilterSidebar } from "../";

class Home extends Component {
  componentWillMount() {

  }

  render() {
    return (
      <div className="home">
        <FilterSidebar />
      </div>
    )
  }
}

export default Home