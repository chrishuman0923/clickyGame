import React from 'react';
import './index.css';

function Game(props) {
  return (
    <div className='container'>
      <div className='row'>
        {
          //render each image
          props.images.map(image => {
            return (
              <div key={image} className='col-3'>
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
