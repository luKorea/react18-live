import React, { PureComponent } from 'react'

export class ControlForm extends PureComponent {
  constructor() {
    super()
    this.state = {
      username: 'korea'
    }
  }
  changeData(e) {
    this.setState({
      username: e.target.value
    })
  }
  render() {
    return (
      <div>
        {/* 非受控组件 */}
        <div>
        <span>非受控组件</span>
        <input type="text" onChange={e => this.changeData(e)} />
        <span>{this.state.username}</span>
        </div>
        {/* 受控组件 */}
        <div>
        <span>受控组件</span>
        <input type="text" value={this.state.username} onChange={e => this.changeData(e)} />
        <span>{this.state.username}</span>
        </div>
      </div>
    )
  }
}

export default ControlForm