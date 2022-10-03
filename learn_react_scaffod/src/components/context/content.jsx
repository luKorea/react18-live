import React, { Component } from 'react';
import ThemeContext from './context';
import eventBus from './utils/event-bus'
class HomeContent extends Component {
  click() {
    eventBus.emit('click', {
      name:'korea',
      age: 18
    })
  }
  render() {
    return (
      <div style={this.context}>
        HomeContent
        <button onClick={() => this.click()}>非父子组件事件传递-事件总线方式</button>
      </div>
    );
  }
}

HomeContent.contextType = ThemeContext

export default HomeContent;