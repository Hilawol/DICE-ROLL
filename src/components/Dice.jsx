import React, { Component } from 'react'

export default class Dice extends Component {
  render() {
    return (
      <div id={this.props.class} className="dice" style={{
        background: `white url(${this.props.img}) center center/cover `
      }
      }>
      </div >
    )
  }
}
