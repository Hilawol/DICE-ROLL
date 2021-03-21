import React, { Component } from 'react'
import Player from './Player'
import Dices from './Dices'
import Button from './Button';

export default class BoardGame extends Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  getInitialState = () => ({
    currentPlayer: 0,
    players: [{ id: 0, name: "Player1", totalScore: 0, roundScore: 0 },
    { id: 1, name: "Player2", totalScore: 0, roundScore: 0 }],
    winScore: 20,
    winner: null,
    gameOver: false,
  })

  changeCurrentPlayer = () => {
    let cp = this.state.currentPlayer;
    cp === this.state.players.length - 1 ? cp = 0 : cp += 1;
    this.setState({ currentPlayer: cp });
  }
  onWinScoreChange = (e) => {
    if (e.currentTarget.value > 0 || e.currentTarget.value === "") {
      this.setState({ winScore: e.currentTarget.value });
    }
  }
  onNewGame = () => {
    console.log("newGame");
    this.setState(this.getInitialState());
  }

  onRollDice = (roll) => {
    const players = this.state.players;
    const player = players[this.state.currentPlayer];
    if (roll === 12) {
      player.roundScore = 0;
      this.changeCurrentPlayer();
    }
    else {
      player.roundScore = player.roundScore + roll;
    }
    players[this.state.currentPlayer] = player;
    this.setState({ players: players });
  }

  onHold = () => {
    const players = this.state.players;
    const player = players[this.state.currentPlayer];
    player.totalScore = player.totalScore + player.roundScore;
    if (player.totalScore >= this.state.winScore) {
      player.winner = true;
      this.setState({ winner: player.id, gameOver: true });
    }
    if (!this.state.gameOver) {
      player.roundScore = 0;
      this.setState({ players: players });
      this.changeCurrentPlayer();
    }
  }

  render() {
    const players = this.state.players.map(p => {
      const name = `PLAYER${p.id + 1}`; //zero based
      return <Player key={p.id} id={p.id} name={name} currentPlayer={this.state.currentPlayer} totalScore={p.totalScore} roundScore={p.roundScore} winner={p.winner} />
    })
    return (
      <div id="boardGame">
        <div className="players"> {players}</div>
        <div className="action">
          <Dices onClick={this.onRollDice} gameOver={this.state.gameOver} />
          <Button onClick={this.onHold} text="Hold" gameOver={this.state.gameOver} />
          <input id="winScore" type="text" min="0" value={this.state.winScore} onChange={this.onWinScoreChange}></input>
        </div>
        <Button onClick={this.onNewGame} text="New Game" class="newGame" />
      </div>
    )
  }
}



