import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Game from './components/Game';

class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    images: [
      'bass', 'clarinet', 'cymbals', 'flute', 'marimba', 'mellophone',
      'quads', 'sax', 'snare', 'trombone', 'trumpet', 'tuba'
    ]
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

  // increment the score
  updateScore = () => {
    this.setState({score: this.state.score + 1});
  }

  // increment the top score
  updateTopScore = () => {
    this.setState({score: this.state.topScore + 1});
  }

  // reset the score
  resetScore = () => {
    this.setState({score: 0});
  }

  render() {
    return (
      <div>
        <Navbar score={this.state.score} topScore={this.state.topScore}/>
        <Header />
        <Game images={this.state.images} />
      </div>
    )
  }
}

export default App;
