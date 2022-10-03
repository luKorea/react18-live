import React, { createRef, forwardRef, PureComponent } from 'react'

const ForWardCom = forwardRef((props, ref) => {
  function test() {
    console.log('测试函数式组件中的方法是否可以获取到')
  }
  return (
    <div ref={ref}>函数式组件</div>
  )
})


export class RefComponent extends PureComponent {
  constructor() {
    super()
    this.titleRef = createRef()
    this.funcRef = createRef()
  }
  getRef(){
    console.log(this.titleRef.current)
    console.log(this.funcRef.current);
  }
  render() {
    return (
      <div ref={this.titleRef}>
        RefComponent
        <button onClick={() => this.getRef()}>获取ref</button>
        <ForWardCom ref={this.funcRef} />
      </div>
    )
  }
}

export default RefComponent