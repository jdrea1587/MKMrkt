import React from 'react';
import '../index.css';
import { GetProducts } from '../services/ProductService';
//total items in cart
//Total price
//Checkout button -> form Order info

function Order({ cart }) {
  console.log('cart in order', cart);
  const calculateQuantity = () => {
    let quantity = 0;
    cart.products.forEach((product) => quantity + product.quantity);
    return quantity;
  };
  console.log(calculateQuantity());

  //cart.
  //create function that counts number of products in order
  //create function that adds prices.

  // let totalSum = 0.00
  // for (let price in cart) {
  //   ++totalSum;
  // }
  // console.log(totalSum)

  return (
    <div className='cartstatus'>
      <div>
        <h1>Savvy</h1>
        <button>Checkout</button>
      </div>
    </div>
  );
}

export default Order;
