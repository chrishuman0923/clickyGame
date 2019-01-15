import React from 'react';
import './index.css';

function Navbar(props) {
  return (
    <nav className="nav customNav">
      <div className='container-fluid'>
        <div className='row'>
          <a className='col' href='/'>
            <button className='btn mt-2 mb-2'>Clicky Game</button>
          </a>
          <p className='col mt-3'>Score: {props.score} | Top Score: {props.topScore}</p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;