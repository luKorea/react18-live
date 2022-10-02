import React, { Component } from "react";
import NavBar from "./navbar";

class SlotComponent extends Component {
  render() {
    return (
      <div>
        {/* children 写法 */}
        <NavBar>
          <div>左边</div>
          <div>中间</div>
          <div>右边</div>
        </NavBar>
        {/* props 写法 */}
        <NavBar
          leftContent={<button>按钮</button>}
          centerContent={<input />}
          rightContent={<i>有限</i>}
        />
      </div>
    );
  }
}

export default SlotComponent;
