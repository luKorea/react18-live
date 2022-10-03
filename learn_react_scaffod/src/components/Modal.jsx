import React, { PureComponent } from 'react'
import { createPortal } from "react-dom"

//  createPortal 实现模态框功能
export class Modal extends PureComponent {
  render() {
    return createPortal(this.props.children, document.querySelector("#modal"))
  }
}

export default Modal