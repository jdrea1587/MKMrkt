import React from 'react';
import Card from '../components/Card';
import Order from '../components/Order';
import EmptyCart from '../components/EmptyCart';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  LoadCart,
  LoadRemoveFromCart,
  LoadUpdateQuantity,
  LoadEmptyCart,
  LoadAddUserInfo,
  LoadPlaceOrder,
} from '../store/actions/CartAction';
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

// const [cart, setCart] = useState()

const mapStateToProps = ({ cartState }) => {
  return { cartState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCart: (id) => dispatch(LoadCart(id)),
    // deleteItemInCart: (orderItemId) => dispatch(LoadRemoveFromCart(orderItemId)),
    // updateCart: (orderItemId, quantity) => dispatch(LoadUpdateQuantity(orderItemId, quantity)),
    // emptyCart: (orderId) => dispatch(LoadEmptyCart(orderId)),
    // addUserInfo: () => dispatch (LoadAddUserInfo()),
    // playOrder: () => dipatch (LoadPlaceOrder())
  };
};

const Cart = (props) => {
  console.log('props.fetchcart', props.fetchCart);
  console.log('props', props);
  console.log('cartstate', props.cartState);
  const { products } = props.cartState;

  useEffect(() => {}, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      {products?.length > 0 ? (
        products.map((product) => (
          <div>
            <Card
              key={product.slug}
              name={product.name}
              description={product.description}
              price={product.price}
              image={product.image}
              available={product.available}
            />
            <Order cart={props.cartState} />
          </div>
        ))
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
