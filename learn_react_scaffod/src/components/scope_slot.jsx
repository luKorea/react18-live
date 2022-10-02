// 作用于插槽
import React, { Component } from "react";
import TabControl from "./tabControl";

class ScopeSlot extends Component {
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
  renderDifferentType(item) {
    if (item === '流行') {
      return <button>{item}</button>
    } else if (item === '潮流') {
      return <span>{item}</span>
    } else {
      return <i>{item}</i>
    }
  }
  render() {
    const {titles,tabIndex} = this.state;
    return (
     <div>
       <TabControl
        titles={titles}
        changeIndex={(index) => this.changeIndex(index)}
        itemType={item => this.renderDifferentType(item)}
      />
      <div>{titles[tabIndex]}</div>
     </div>
    );
  }
}

export default ScopeSlot;
