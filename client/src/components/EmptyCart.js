import React from 'react';
import '../index.css';

export default function EmptyCart() {
  return (
    <div className='cartstatus'>
      {' '}
      <h2>
        Your cart is empty! <br /> You're a window shopper.
      </h2>
    </div>
  );
}
