export function loginAuth(WrapperComponent) {
  return props => {
    const token = localStorage.getItem('token');
    if (token) {
      return <WrapperComponent {...props}/>
    } else {
      return <h2>鉴权登录, 你还没有登录, 请先登录</h2>
    }
  }
}