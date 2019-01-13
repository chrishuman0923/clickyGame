import React from 'react';
import './index.css';

function Navbar(props) {
  return (
    <nav className="nav customNav">
      <div className='container-fluid'>
        <div className='row'>
          <a className='col' href='/'>Clicky Game</a>
          <p className='col'>Click an image to begin!</p>
          <p className='col'>Score: {props.score} | Top Score: {props.topScore}</p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;