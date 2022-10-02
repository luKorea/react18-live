import React, { Component } from "react";
import "./style.css";

class TabControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }
  handleChangeItem(index) {
    this.setState({
      currentIndex: index,
    });
    this.props.changeIndex(index);
  }
  render() {
    const { currentIndex } = this.state;
    const { itemType } = this.props;
    return (
      <div className="tab-container">
        {this.props.titles.map((item, index) => {
          return (
            <div
              key={item}
              className={`item ${index === currentIndex && "active"}`}
              onClick={() => this.handleChangeItem(index)}
            >
              {/* 作用于插槽 */}
              {itemType ? itemType(item) : <span className="text">{item}</span>}
            </div>
          );
        })}
      </div>
    );
  }
}

export default TabControl;
