import React, { Component } from 'react';
import ThemeContext from './context';

class HomeContent extends Component {
  render() {
    return (
      <div style={this.context}>
        HomeContent
      </div>
    );
  }
}

HomeContent.contextType = ThemeContext

export default HomeContent;