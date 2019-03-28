import React, { Component, useState } from 'react';
import './App.css';
import {Title} from './title/Title'
import { checkPropTypes } from 'prop-types';
import { getWinner, Throw } from './helpers';

const validateThrow = (somestring: string): boolean => (
  somestring === 'paper' || somestring === 'rock' || somestring === 'scissors'
  );

const ScoreReport = (props) => {
  return (
    <div id="score-report">
      {props.children}
    </div>
  );
}

type AppState = Choices & {
  scoreReport: String,
}

type Choices = {
  p1Choice: Throw,
  p2Choice: Throw,
}

const ScoreButton = ({callback, children}) => (
  <button onClick={callback}>{children}</button>
)

const InputField = ({handleChange, placeholderText}) => (
  <input type="text" onChange={handleChange} placeholder={placeholderText} />
  );

class App extends Component {
  state: AppState

  constructor(props) {
    super(props);
    this.state = {
      p1Choice: '',
      p2Choice: '',
      scoreReport: '',
    }
  }

  
  handleChoice = (player: keyof Choices) => ({target: {value}}: {target: {value: string}}) => {
    this.setState({
      [player]: value
    });
  }

  pressScore = () => {
    const { p1Choice, p2Choice } = this.state;
    let announce = '';
    if (!validateThrow(p1Choice) || !validateThrow(p2Choice)) announce = 'Something went wrong.';
    else {
      const winner = getWinner({ owner: 'Player 1', throw: p1Choice }, {owner: 'Player 2', throw: p2Choice });
      if (winner === 'Draw') announce = 'Draw';
      else announce = `${winner} wins.`;
    }
    this.setState({scoreReport: announce});
  }

  render() {
    return (
      <div>
        <div>Rock Paper Scissors</div>
        {this.state.scoreReport && <ScoreReport>{this.state.scoreReport}</ScoreReport>}
        <ScoreButton callback={this.pressScore}>Get a score!</ScoreButton>
        <InputField handleChange={this.handleChoice('p1Choice')} placeholderText="Enter player 1 throw" />
        <InputField handleChange={this.handleChoice('p2Choice')} placeholderText="Enter player 2 throw" />
      </div>
    );
  }
}

export default App;

// App
  // score report: '' or 'PlayerName wins' or 'Draw' or 'Something went wrong'

  // 
  // ScoreReport
