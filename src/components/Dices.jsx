import React, { Component } from 'react'
import Button from './Button';
import Dice from './Dice'

export default class Dices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dices: [1, 1],
    }
  }

  onRollDice = () => {
    const d = [Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1];
    this.setState({ dices: d });
    this.props.onClick(d[0] + d[1]);
  }

  render() {
    const url1 = `https://github.com/pini85/dice-game-starter-pack/blob/master/dice-${this.state.dices[0]}.png?raw=true`;
    // const url1 = `./img/dice-${this.state.dices[0]}.png`;
    // const url2 = `./img/dice-${this.state.dices[1]}.png`;
    const url2 = `https://github.com/pini85/dice-game-starter-pack/blob/master/dice-${this.state.dices[1]}.png?raw=true`;
    return (
      <div className="dices">
        <Dice id="dice1" img={url1} value={this.state.dices[0]} />
        <Dice id="dice2" img={url2} value={this.state.dices[1]} />
        {/* <button onClick={this.onRollDice} className={this.props.gameOver ? "btnDisable" : ""}>Roll</button> */}
        <Button onClick={this.onRollDice} text="Roll" gameOver={this.props.gameOver} />
      </div>
    )
  }
}
