import React, { memo } from 'react'

const RefAndCallbackAndMemo = memo(() => {
  // callback 只有在将事件传递给子元素时才能做到性能优化
  return (
    <div>callback ref memo 结合使用场景</div>
  )
})

export default RefAndCallbackAndMemo