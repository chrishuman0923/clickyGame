import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Game from './components/Game';

class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    guessSts: false,
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

  //function to shuffle array
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
    let val = event.target.alt.trim(),
      i = this.state.clickedImages.indexOf(val),
      tempArr = this.state.clickedImages;

    //The image already exists in the clicked array
    if(i > -1) {
      this.resetScore();

      //Shuffle image array
      return this.setState({images: this.shuffleArr(this.state.images)});
    }
    
    //Add to temp array
    tempArr.push(val);

    //Add value to state array and update score
    this.setState({clickedImages: tempArr});
    this.updateScore();

    //Shuffle image array
    this.setState({images: this.shuffleArr(this.state.images)});
  }

  // increment the score and change the in-game message
  updateScore = () => {
    let tempScore = this.state.score;

    this.setState(
      {
        score: tempScore + 1,
        //If score + 1 is greater than the top score then update both, else just update score
        topScore: (tempScore + 1 > this.state.topScore) ? tempScore + 1 : this.state.topScore,
        guessSts: true,
        gameMsg: 'You guessed correctly!'
      }
    )
  }

  // reset the score
  resetScore = () => {
    this.setState(
      {
        score: 0,
        guessSts: false,
        gameMsg: 'You guessed incorrectly!',
        clickedImages: []
      }
    );
  }

  render() {
    return (
      <div>
        <Navbar score={this.state.score} topScore={this.state.topScore}/>
        <Header />
        <Game clickHandler={this.handleImgClick} images={this.state.images}
          gameMsg={this.state.gameMsg} guessSts={this.state.guessSts}
        />
      </div>
    )
  }
}

export default App;
