import React from 'react';
import style from './style.css';

export const Header = () => {
  return( 
  <div className='header'>
    <div className="quadrado">
      <img src="images/quad.png" alt="" />
    </div>
    <div className="nav">
        <nav>
          <a href="">Home</a>
          <a href="">Services</a>
          <a href="">Aboult</a>
          <a href="">Contact</a>
        </nav>
    </div>
  </div>
  )
};
