import React, { Component } from 'react';
import './style.css'

class NavBar extends Component {
  render() {
    console.log(this.props.children);
    const {leftContent, centerContent,rightContent } = this.props;
    return (
      <div className='nav-bar'>
        <div className="left">{leftContent}</div>
        <div className="center">{centerContent}</div>
        <div className="right">{rightContent}</div>
      </div>
    );
  }
}

export default NavBar;