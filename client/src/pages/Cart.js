import React from 'react';
import Card from '../components/Card';
import Order from '../components/Order';
import EmptyCart from '../components/EmptyCart';
import { LoadProductBySlug } from '../store/actions/ProductAction';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { LoadCart, LoadRemoveFromCart, LoadUpdateQuantity } from '../store/actions/CartAction';
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

const mapStateToProps = ({ productState, cartState }) => {
  return { productState, cartState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCart: (id) => dispatch(LoadCart(id)),
    fetchProduct: (id) => dispatch(LoadProductBySlug(id)),
    deleteFromCart: (orderItemId) => dispatch(LoadRemoveFromCart(orderItemId)),
    updateCart: (orderItemId, quantity) => dispatch(LoadUpdateQuantity(orderItemId, quantity)),
    // deleteItemInCart: (orderItemId) => dispatch(LoadRemoveFromCart(orderItemId)),
    // updateCart: (orderItemId, quantity) => dispatch(LoadUpdateQuantity(orderItemId, quantity)),
    // emptyCart: (orderId) => dispatch(LoadEmptyCart(orderId)),
    // addUserInfo: () => dispatch (LoadAddUserInfo()),
    // playOrder: () => dipatch (LoadPlaceOrder())
  };
};

const Cart = (props) => {
  const { products } = props.cartState;

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
        <div>
          {props.cartState.products.map((product) => {
            console.log('productstate products', props.productState.products);
            const prod = props.productState.products.filter(
              (prod) => prod.product_url === product.product
            )[0];
            return (
              <Card
                key={prod.slug}
                name={prod.name}
                description={prod.description}
                price={prod.price}
                image={prod.image}
                available={prod.available}
                onClickDelete={(e) => {
                  e.preventDefault();
                  props.deleteFromCart(product.id);
                }}
              />
            );
          })}
          <Order cart={props.cartState} />
        </div>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
