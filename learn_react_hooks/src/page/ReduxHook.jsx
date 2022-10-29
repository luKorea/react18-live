import React, { memo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { addNum } from '../store/module/counter'

const ReduxHook = memo(() => {
  //  shallowEqual 浅层比较, 只有变化的时候才渲染
  const {count} = useSelector(state => ({count: state.counter.count}), shallowEqual)
  const dispatch = useDispatch()
  return (
    <div className='wrap'>
      store中的数据; {count}
      <button onClick={e =>  dispatch(addNum(1))}>+1</button>
    </div>
  )
})

export default ReduxHook