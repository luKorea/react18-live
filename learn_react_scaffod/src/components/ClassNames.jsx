import React, { PureComponent } from "react";
import _class from "classnames";

export class ClassNamesComponent extends PureComponent {
  render() {
    return (
      <div className={_class("aaa", { isFalse: 0, isTrue: 1, "is-true": 1 })}>
        ClassNamesComponent
      </div>
    );
  }
}

export default ClassNamesComponent;
