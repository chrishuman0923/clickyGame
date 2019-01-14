import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';

class App extends Component {
  state = {
    score: 0,
    topScore: 0
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
      </div>
    )
  }
}

export default App;
