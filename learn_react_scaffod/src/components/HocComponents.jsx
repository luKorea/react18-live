import React, { PureComponent } from 'react'
import { loginAuth } from './hoc/login_auth'
import PropsHoc from './hoc/props_hoc'
import ThemeContext from './hoc/theme_context'
import withTheme from './hoc/theme_hoc'


const Home = PropsHoc((props) => {
  return <div>props 增强高阶组件: {props.name}-{props.age}</div>
})

// 主题组件增强
const ThemeHoc = withTheme(props => {
  return <div>主题组件: {props.test}</div>
})

// 登录鉴权
const Cart = loginAuth(() => (<div>登录后展示</div>))

export class HocComponents extends PureComponent {
  login() {
    localStorage.setItem('token', '12243')
    this.forceUpdate()
  }
  render() {
    return (
      <div>
        <Home age={19} />
        <ThemeContext.Provider value={{test: '1'}}>
          <ThemeHoc />
        </ThemeContext.Provider>
        <button onClick={() => this.login()}>点击登录</button>
        <Cart />
      </div>
    )
  }
}

export default HocComponents