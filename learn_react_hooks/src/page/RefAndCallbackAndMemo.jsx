import React, { memo, useCallback } from 'react'
import { useRef } from 'react';
import { useState } from 'react'


const ChildComponent = memo(props => {
  console.log('子组件更新');
  return (
    <div>
      子组件
      <button onClick={e => props.changeCount()}>子组件中点击触发父组件的事件</button>
    </div>
  )
})

const RefAndCallbackAndMemo = memo(() => {
  console.log('父组件更新')
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('第一次message的值')
  // callback 只有在将事件传递给子元素时才能做到性能优化
  // 父组件更新, 子组件会重新渲染, 这里会导致只要父组件更新, 子组件一定会更新
  // const changeCount = () => {
  //   setCount(count + 1)
  // }
  // 优化方案一, 只有当依赖的数据发生改变, 子组件才会重新渲染, 如果第二个参数传空, 会形成回调陷阱, 拿到的值永远是一
  // const changeCount = useCallback(() => {
  //   setCount(count + 1)
  // }, [count])
  // 优化方案二, 使用ref, 值改变, 只会重新渲染父组件, 子组件不会重新渲染
  const countRef = useRef()
  countRef.current = count
  const changeCount = useCallback(() => {
    setCount(countRef.current + 1)
  }, [])
  return (
    <div className='wrap'>
      callback ref memo 结合使用场景 {count}
      <button onClick={e => changeCount()}>父组件点击</button>
      <div>{message}</div>
      <button onClick={e => setMessage('点击之后的值')}>点击更新message的值</button>
      <ChildComponent changeCount={changeCount} />
    </div>
  )
})

export default RefAndCallbackAndMemo