import React, { memo } from 'react'
import { useState } from 'react';
import { useRef } from 'react'

let state = null;
const RefComponent = memo(() => {
  const [count, setCount] = useState(0)
  // useRef的作用, 一. 用于获取DOM节点, 二. 用于保存数据, 这个数据在整个生命周期中可以保持不变
  // 用法一
  const domRef = useRef()
  // 用法二
  const stateRef = useRef()
  console.log(state === stateRef.current);
  stateRef.current = {
    name: 'korea'
  }
  state = stateRef.current
  const getDom = () => {
    console.log(domRef.current);
  }
  return (
    <div>
      <div ref={domRef}>RefComponent</div> 
      <button onClick={e => getDom()}>获取节点</button>
      <button onClick={e => setCount(count + 1)}>改变数据</button>
    </div>
  )
})

export default RefComponent