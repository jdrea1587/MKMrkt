import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';

function Order() {
  return (
    <div className='cartstatus'>
      <div>
        <h1>Savvy?</h1>
        <Link to={'/checkout/'}>
          <button>Checkout</button>
        </Link>
      </div>
    </div>
  );
}

export default Order;
