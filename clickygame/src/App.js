// still need the actual functions to be built in order to work correctly

import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import characters from "./characters.json"
import Nav from './components/Nav'
import Title from './components/Title'
import CharacterCard from './components/CharacterCard'
import Wrapper from './components/Wrapper'


class App extends Component {
  // render() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <h1 className="App-title">Welcome to React</h1>
  //       </header>
  //       <p className="App-intro">
  //         To get started, edit <code>src/App.js</code> and save to reload.
  //       </p>
  //     </div>
  //   );
  // }
  state = {
    message: "Click a Character to begin!",
    highScore: 0,
    gameScore: 0,
    characters: characters,
    unselectedCharacters: characters
  }

  // componentDidMount() {

  // }
  /**
   * Randomize array element order in-place.
   * Using Durstenfeld shuffle algorithm.
   */
  // function shuffleArray(array) {
  //   for (var i = array.length - 1; i > 0; i--) {
  //       var j = Math.floor(Math.random() * (i + 1));
  //       var temp = array[i];
  //       array[i] = array[j];
  //       array[j] = temp;
  //   
  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  selectCharacter = name => {
    const findCharacter = 

    if (findCharacter) {
      
      this.setState({
        message: "You guessed wrong!",
        highScore: (this.state.gameScore , this.state.highScore) ,
        gameScore: 0,
        characters: characters,
        unselectedCharacters: characters
      });
    }
    else {
      
      const newCharacters = 

      this.setState({
        message: "You guessed right!",
        gameScore: this.state.gameScore + 1,
        characters: characters,
        unselectedCharacters: newCharacters
      });
    }
    this.shuffleArray(characters);
  };

  render() {
    return (
      <Wrapper>
        <Nav
          message={this.state.message}
          gameScore={this.state.gameScore}
          highScore={this.state.highScore}
        />
        <Title />
        {
          this.state.characters.map(character => (
            <CharacterCard
              name={character.name}
              image= {character.image}
              selectCharacter={this.selectCharacter}
              gameScore={this.state.gameScore}
            />
          ))
        }
        </Wrapper>
    );
  }
}

export default App;
