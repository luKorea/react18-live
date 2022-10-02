import React, { Component } from "react";
import Home from "./context/home";
import ThemeContext from "../components/context/context";

class ContentCp extends Component {
  render() {
    return (
      <div>
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
