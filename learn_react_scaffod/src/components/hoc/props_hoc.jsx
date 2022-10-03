//  props 高阶组件
import { PureComponent } from 'react'
function PropsHoc(WrapperComponent) {
  class NewComponent extends PureComponent {
    constructor(){
      super()
      this.state = {
        userInfo: {
          name: 'korea'
        }
      }
    }
    render() {
      return <WrapperComponent {...this.state.userInfo} {...this.props} />
    }
  }
  return NewComponent
}

export default PropsHoc