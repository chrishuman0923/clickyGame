import React from 'react';
import './index.css';

function Game(props) {
  return (
    <div className='container'>
      <p className=
        //Nested ternary operators to determine which classes to apply to <p>
        {
          (props.gameMsg==='Click an image to begin!') ? 'gameMsg' : 
            (props.guessSts) ? 'gameMsg correct' : ' gameMsg incorrect'
        }
      >{props.gameMsg}</p>
      <div className='row'>
        {
          //render each image
          props.images.map(image => {
            return (
              <div onClick={props.clickHandler} key={image} className='col-3'>
                <img src={require(`../../images/${image}.jpg`)}
                  className='mt-3 mb-3 customImg' alt={image}
                />
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default Game;
