import React, { Component } from 'react'

export default class Score extends Component {
  render() {
    return (
      <div className={this.props.class}>
        <p className="scoreTitle">{this.props.title}</p>
        <p className="score">{this.props.score}</p>
      </div>
    )
  }
}
