import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';

function Order({ cart }) {
  const calculateQuantity = () => {
    let quantity = 0;
    cart.products.forEach((product) => quantity + product.quantity);
    return quantity;
  };

  return (
    <div className='cartstatus'>
      <div>
        <h1>Savvy</h1>
        <Link to={'/checkout/'}>
          <button>Checkout</button>
        </Link>
      </div>
    </div>
  );
}

export default Order;
