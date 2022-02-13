import React from 'react';
import Card from '../components/Card';
import EmptyCart from '../components/EmptyCart';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { LoadAddToCart } from '../store/actions/CartAction';
//Backend
//Create Cart reducer with actions which creates order
//1. Create new order action
//2. Add products to order:
// each time someone adds a product,
// check to see if product is already in cart
// func. action= NewOrder, AddNewProductToOrder, UpdateProductInOrder, DeleteProductInOrder
// if in cart: update quantity of orderitem product
// else if create OrderItem with the product and order attached

//FrontEnd
//Grab Cart state, contains order if is one
//if no cart state -> 'no items in cart' : '(mapProductsInCart)'
//calculate total cost of products in order
//update amount of items in cart

const mapStateToProps = ({ cartState }) => {
  return { cartState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCart: () => dispatch(LoadAddToCart()),
  };
};

const Cart = (props) => {
  console.log('props.fetchcart', props.fetchCart);
  console.log('props', props);
  console.log('cartstate', props.cartState);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <EmptyCart />

      <Card />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
