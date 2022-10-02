import React, { Component } from "react";
import TabControl from "./tabControl";

class TabControlWrap extends Component {
  constructor() {
    super();
    this.state = {
      titles: ["流行", "潮流", "复古"],
      tabIndex: 0
    };
  }
  changeIndex(tabIndex) {
    this.setState({
      tabIndex
    })
  }
  render() {
    const {titles,tabIndex} = this.state;
    return (
     <div>
       <TabControl
        titles={titles}
        changeIndex={(index) => this.changeIndex(index)}
      />
      <div>{titles[tabIndex]}</div>
     </div>
    );
  }
}

export default TabControlWrap;
