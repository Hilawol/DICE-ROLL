import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    let className = "btn ";
    if (this.props.class) {
      className += this.props.class;
    }
    className = className + (this.props.gameOver ? " btnDisable " : "");
    return (
      <button className={className} onClick={this.props.onClick}>{this.props.text}</button>
    )
  }
}
