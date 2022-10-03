import React, { Component } from "react";
import Home from "./context/home";
import ThemeContext from "../components/context/context";
import eventBus from "./context/utils/event-bus";

class ContentCp extends Component {
  constructor() {
    super();
    this.state = {
      name: 'info',
      age: 20
    }
  }
  componentDidMount() {
    eventBus.on('click', (s) => this.handleClick(s))
  }
  handleClick(data) {
    console.log(data, 'data', this)
    this.setState({
      name: data.name,
      age: data.age
    })
  }
  componentWillUnmount() {
    eventBus.off('click', this.handleClick)
  }
  render() {
    return (
      <div>
        <span>{this.state.name}</span>
        <span>{this.state.age}</span>
        <ThemeContext.Provider
          value={{
            color: "red",
            fontSize: "29px",
          }}
        >
          <Home />
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default ContentCp;
