import React, { memo, useContext } from 'react'

import { ThemeContext, UserContext } from '../context'
const ContextAndReducer = memo(() => {
  const user = useContext(UserContext)
  const theme = useContext(ThemeContext)
  return (
    <div>
        <div> ContextAndReducer hook 学习</div>
        {/* 早期写法 */}
        {/* <ThemeContext.Consumer>
            {
                value => {
                    return <h1 style={{color: value.color, fontSize: value.fontSize}}>测试</h1>
                }
            }
        </ThemeContext.Consumer> */}
        <div>{user.name}</div>
        <h1 style={{color: theme.color, fontSize: theme.fontSize}}>测试</h1>
    </div>
  )
})

export default ContextAndReducer