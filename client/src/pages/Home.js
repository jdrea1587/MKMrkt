import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../index.css';
import Card from '../components/Card';
import { LoadProducts } from '../store/actions/ProductAction';
import { LoadAddToCart } from '../store/actions/CartAction';
import styled from 'styled-components';

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
  };
};

function Home(props) {
  useEffect(() => {
    props.fetchProducts();
  }, []);

  return (
    <>
      <StyledTitle>MarioKart Blk Mrkt</StyledTitle>
      <div className='container'>
        <div className='row'>
          {props.productState.products.map((product) => (
            <Link to={`/productview/${product.id}`} key={product.id} product={product}>
              <Card
                key={product.slug}
                name={product.name}
                description={product.description}
                price={product.price}
                image={product.image}
                available={product.available}
                onClick={(e) => {
                  e.preventDefault();
                  props.addToCart(product.product_url, props.cartState?.order_url);
                  console.log('after', props.cartState);
                }}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
