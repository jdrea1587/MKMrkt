import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { LoadProductBySlug } from '../store/actions/ProductAction';
import styled from 'styled-components';

const StyledRoot = styled.div`
  padding: 50px 12px;
`;
const StyledContainer = styled.div`
  max-width: 550px;
  width: 75%;
  margin: auto;
  padding: 20px;
  border: 7px outset lightgrey;
  box-shadow: 5px;
`;
const StyledName = styled.h1`
    width: 100%;
    height: 100%;
    padding: 20px;
    text-align: center;
    margin: auto;
    @media (max-width: 500px) {
        font-size: 1rem;
`;
const StyledPhoto = styled.img`
    width: 50%;
    height: 50%;
    margin: auto;
    border: 3px solid black;
    @media (max-width: 500px) {
        font-size: 1rem;
`;
const StyledDescription = styled.h2`
  color: #000;
  font-weight: 300;
  padding: 20px;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;
const StyledPrice = styled.h2`
  color: #000;
  font-weight: 600;
  padding: 5px;
  margin: 4px;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;
const mapStateToProps = ({ productState }) => {
  return { productState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProduct: (id) => dispatch(LoadProductBySlug(id)),
  };
};

function ProductView({ fetchProduct, productState }) {
  useEffect(() => {
    fetchProduct(id);
  }, []);
  const { id } = useParams();
  const { name, description, image, price } = productState.product;

  return (
    <StyledRoot>
      <StyledContainer>
        <StyledName> {name} </StyledName> <StyledPhoto alt='item' className='photo' src={image} />{' '}
        <StyledDescription> {description} </StyledDescription>{' '}
        <div>
          <StyledPrice> $ {price} </StyledPrice>{' '}
        </div>{' '}
        <div className='cart'>
          <svg className='outCart' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'>
            <path d='M2 6h10l10 40h32l8-24H16'></path>
            <circle cx='23' cy='54' r='4'></circle>
            <circle cx='49' cy='54' r='4'></circle>
          </svg>
        </div>
      </StyledContainer>{' '}
    </StyledRoot>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductView);
