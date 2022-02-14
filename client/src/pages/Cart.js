import React from 'react';
import Card from '../components/Card';
import Order from '../components/Order';
import EmptyCart from '../components/EmptyCart';
import { LoadProductBySlug } from '../store/actions/ProductAction';
import { connect } from 'react-redux';
import { LoadCart, LoadRemoveFromCart, LoadUpdateQuantity } from '../store/actions/CartAction';

const mapStateToProps = ({ productState, cartState }) => {
  return { productState, cartState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCart: (id) => dispatch(LoadCart(id)),
    fetchProduct: (id) => dispatch(LoadProductBySlug(id)),
    deleteFromCart: (orderItemId) => dispatch(LoadRemoveFromCart(orderItemId)),
    updateCart: (quantity) => dispatch(LoadUpdateQuantity(quantity)),
  };
};

const Cart = (props) => {
  const { products } = props.cartState;

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        padding: '20px',
        display: 'flex',
        justifycontent: 'center',
        alignitems: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexwrap: 'wrap',
          msflexpack: 'distribute',
          justifycontent: 'space-around',
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
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
