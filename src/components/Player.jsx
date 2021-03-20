import React, { Component } from 'react'
import Score from './Score'

export default class Player extends Component {
  render() {
    console.log("render player id:", this.props.id, "roundscore:", this.props.roundScore);
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
        <Score class="totalScore" title="Total" score={this.props.totalScore} />
        <Score class="roundScore" title="Current" score={this.props.roundScore} />
      </div>
    )
  }
}
