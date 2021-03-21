import React, { Component } from 'react'
import Score from './Score'

export default class Player extends Component {
  render() {
    let className = "player";
    if (this.props.currentPlayer === this.props.id) {
      className = className + " currentPlayer";
    }
    if (this.props.winner) {
      className = className + " winner";
    }
    return (
      <div id={this.props.id} className={className}>
        <h3 className="playerName">{this.props.name}</h3>
        <Score class="totalScore" title="Total Points" score={this.props.totalScore} />
        <p className={!this.props.winner ? "hidden" : ""}>YOU ARE THE WINNER!</p>
        <Score class="roundScore" title="Current Round" score={this.props.roundScore} />
      </div>
    )
  }
}
