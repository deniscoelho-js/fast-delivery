import React from 'react';
import styles from './styles.css'

export const Menu = () => {
  return( 
  <div className='main'>
    <div className="container-menu">
      <div className="buttons">
        <button>Parcel</button>
        <button>Food</button>
      </div>
      <div className="container-title">
      <div className="title">
          <h1>Fast Responses Fast Delivery</h1>
      </div>
        <div className="text">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos dolore 
            totam consectetur ipsa.
            </p>
        </div>
      </div>
        <div className="btn">
          <button>Book a Delivery</button>
        </div>
    </div>
    <div className="img-menu">
      <img src="images/bike.png" alt="" />
    </div>
  </div>
  )
};
