import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Game from './components/Game';

class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    gameMsg: 'Click an image to begin!',
    images: [
      'bass', 'clarinet', 'cymbals', 'flute', 'marimba', 'mellophone',
      'quads', 'sax', 'snare', 'trombone', 'trumpet', 'tuba'
    ],
    clickedImages: []
  }

  componentDidMount() {
    this.setState({images: this.shuffleArr(this.state.images)});
  }

  shuffleArr = arr => {
    let ctr = arr.length,
      temp,
      i;
    
    // While there are elements in the array
    while (ctr > 0) {
      // Pick a random index
      i = Math.floor(Math.random() * ctr);
      // Decrease ctr by 1
      ctr--;

      // And swap the last element with it
      temp = arr[ctr];
      arr[ctr] = arr[i];
      arr[i] = temp;
    }

    return arr;
  }

  handleImgClick = event => {
    //Get image alt value
    let val = event.target.alt.trim();
    let i = this.state.clickedImages.indexOf(val);

    console.log(
      `Image_Val:${val}
      \nIndex:${i}
      \nClicked_Array:${this.state.clickedImages}`
    );

    //The image already exists in the clicked array
    if(i > -1) {
      //return this.resetScore();
    }
    
    //Add value to state array
    this.setState({clickedImages: this.state.clickedImages.push(val)});
    this.updateScore();
  }

  // increment the score and change the in-game message
  updateScore = () => {
    this.setState(
      {
        score: this.state.score + 1,
        gameMsg: 'You guessed correctly!'
      }
    );
  }

  // increment the top score
  updateTopScore = () => {
    this.setState({score: this.state.topScore + 1});
  }

  // reset the score
  resetScore = () => {
    this.setState(
      {
        score: 0,
        gameMsg: 'You guessed incorrectly!',
        clickedImages: []
      }
    );

  }

  render() {
    return (
      <div>
        <Navbar gameMsg={this.state.gameMsg} score={this.state.score} topScore={this.state.topScore}/>
        <Header />
        <Game clickHandler={this.handleImgClick} images={this.state.images} />
      </div>
    )
  }
}

export default App;
