import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../index.css';
import Card from '../components/Card';
import { LoadProducts } from '../store/actions/ProductAction';
import { LoadAddToCart, LoadRemoveFromCart } from '../store/actions/CartAction';
import styled from 'styled-components';
import pirateflag from '../assets/pirateFlag.jpeg';

const StyledTitle = styled.h1`
    width: 100%;
    height: 100%;
    padding: 30px;
	margin-top: 20px;
    text-align: center;
    margin: auto;
    @media (max-width: 500px) {
        font-size: 1rem;
`;

const mapStateToProps = ({ productState, cartState }) => {
  return { productState, cartState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(LoadProducts()),
    addToCart: (productId, orderId) => dispatch(LoadAddToCart(productId, orderId)),
    deleteFromCart: (orderItemId) => dispatch(LoadRemoveFromCart(orderItemId)),
  };
};

function Home(props) {
  useEffect(() => {
    props.fetchProducts();
  }, []);

  return (
    <>
      <StyledTitle>MarioKart Blk Mrkt</StyledTitle>
      <img src={pirateflag} alt='pirate flag' />
      <div className='container'>
        <div className='row'>
          {props.productState.products.map((product) => {
            const prodInCart = props.cartState.products?.filter(
              (prod) => product.product_url === prod.product
            )[0];
            return (
              <Link to={`/productview/${product.id}`} key={product.id} product={product}>
                <Card
                  key={product.slug}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  image={product.image}
                  available={product.available}
                  onClickCart={(e) => {
                    e.preventDefault();
                    props.addToCart(product.product_url, props.cartState?.order_url);
                  }}
                  onClickDelete={
                    prodInCart && prodInCart.id
                      ? (e) => {
                          e.preventDefault();
                          props.deleteFromCart(prodInCart.id);
                        }
                      : undefined
                  }
                />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
