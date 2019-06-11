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
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <input type="text" onChange={(event) => this.setTextLength(event)} value={this.state.word.join('')}></input>
        <p>{this.state.textLength}</p>
        <ValidationComponent textLength={this.state.textLength}></ValidationComponent>

        {chars}
        
      </div>
    );
  }
}

export default App;
