import React, { Component } from "react";
import HomeContent from "./content";
import FunContent from "./content_func";

class Home extends Component {
  render() {
    return (
      <div>
        首页
        <HomeContent />
        <FunContent /> 
      </div>
    );
  }
}

export default Home;
