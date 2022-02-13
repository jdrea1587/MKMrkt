import { GetProducts, GetProductBySlug } from '../../services/ProductService';
import { GET_PRODUCTS, GET_PRODUCT_BY_SLUG } from '../types';

export const LoadProducts = () => {
  return async (dispatch) => {
    try {
      const products = await GetProducts();
      dispatch({
        type: GET_PRODUCTS,
        payload: products,
      });
    } catch (error) {
      throw error;
    }
  };
};

export const LoadProductBySlug = (id) => {
  return async (dispatch) => {
    try {
      const productBySlug = await GetProductBySlug(id);
      dispatch({
        type: GET_PRODUCT_BY_SLUG,
        payload: productBySlug,
      });
    } catch (error) {
      throw error;
    }
  };
};
