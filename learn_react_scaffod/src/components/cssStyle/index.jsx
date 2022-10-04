import React, { PureComponent } from 'react'
import { AppWrap, AppButton } from './style'

export class CssStyle extends PureComponent {
  render() {
    return (
      <AppWrap>
        <div className='title'>css-style-component</div>
        <AppButton>继承样式按钮</AppButton>
      </AppWrap>
    )
  }
}

export default CssStyle