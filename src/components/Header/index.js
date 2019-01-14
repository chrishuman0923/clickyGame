import React from 'react';
import './index.css';

function Header() {
  return (
    <header className='customHeader'>
      <p id='title'>Clicky Game!</p>
      <p id='instructions'>Click on an image to earn points, but don't click an image more than once!</p>
    </header>
  );
}

export default Header;
