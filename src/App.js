import React, { Component } from 'react';
import './App.css';

import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  
  state = {
    textLength: 0,
    word: []
  }

  setTextLength = (event) => {
    this.setState({
      word: event.target.value.split(''),
      textLength: event.target.value.length})
  }

  deleteCharacter = (index) => {
    console.log('delete');
    const letters = [...this.state.word];
    let totalLetters = this.state.textLength;
    letters.splice(index,1);
    totalLetters = totalLetters - 1;
    this.setState({textLength: totalLetters, word: letters});
  }

  render() {

    let chars = null;

    if(this.state.textLength > 0)
    {
      chars = (
        <div>
          {this.state.word.map((letter, index) => {
            return <CharComponent
              key={index}
              char={letter}
              click={() => this.deleteCharacter(index)}
            />
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <input type="text" onChange={(event) => this.setTextLength(event)} value={this.state.word.join('')}></input>
        <p>{this.state.textLength}</p>
        <ValidationComponent textLength={this.state.textLength}></ValidationComponent>

        {chars}
        
      </div>
    );
  }
}

export default App;
