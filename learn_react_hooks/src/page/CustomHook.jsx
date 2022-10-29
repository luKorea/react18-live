import React, { memo } from 'react'
import { useEffect } from 'react'
import { useLocalStorage, useScrollPosition, useUserToken } from '../hooks';


function useLogEffect(cName) {
  useEffect(() => {
    console.log(`${cName}-组件被创建`);
    return () => {
      console.log(`${cName}-组件被销毁`)
    }
  }, [cName])
}

const CustomHook = memo(() => {
  useLogEffect('custom')
  const [scrollX, scrollY] = useScrollPosition();
  const [user, token] = useUserToken()
  const [avatar, setAvatar] = useLocalStorage('avatar');
 function setD() {
  setAvatar('demo')
 }
  return (
    <div style={{height: '2000px'}}>
      自定义hook使用
      <div>{user.name}-{token}</div>
      <div>{scrollX} - {scrollY}</div>
      <div>{avatar}</div>
      <button onClick={e => setD()}>色诱DC啊</button>
    </div>
  )
})

export default CustomHook