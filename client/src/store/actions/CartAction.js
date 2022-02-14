import {
  CreateNewCart,
  AddOrderItem,
  DeleteOrderItem,
  UpdateOrderItem,
  EmptyCart,
  UpdateOrder,
  GetCartById,
} from '../../services/CartService';

import {
  UPDATE_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_QUANTITY,
  EMPTY_CART,
  ADD_USER_INFO,
  PLACE_ORDER,
} from '../types';

//orderItem = {OrderItem obj} //orderId = IF there's already a cart
export const LoadCart = (id) => {
  return async (dispatch) => {
    try {
      const cart = await GetCartById({ id });
      dispatch({
        type: UPDATE_CART,
        payload: cart,
      });
    } catch (error) {
      throw error;
    }
  };
};

export const LoadAddToCart = (product, order) => {
  console.log('props', product, '/', order);
  return async (dispatch) => {
    try {
      if (order) {
        console.log('if order');
        // create new OrderItem (serv) {productId: ##, orderId: ##}
        // dispatch
        const orderItem = await AddOrderItem({
          product,
          order,
          quantity: 1,
        });
        dispatch({
          type: ADD_TO_CART,
          payload: orderItem,
        });
      } else {
        console.log('newcart');
        const cart = await CreateNewCart();
        console.log('cart', cart);
        dispatch({
          type: UPDATE_CART,
          payload: cart,
        });
        const orderItem = await AddOrderItem({
          product,
          order: cart.order_url,
          quantity: 1,
        });
        console.log(orderItem);
        dispatch({
          type: ADD_TO_CART,
          payload: orderItem,
        });
      }
    } catch (error) {
      throw error;
    }
  };
};

export const LoadRemoveFromCart = (orderItemId) => {
  return async (dispatch) => {
    try {
      const removeItem = await DeleteOrderItem(orderItemId);
      dispatch({
        type: REMOVE_FROM_CART,
        payload: removeItem,
      });
    } catch (error) {
      throw error;
    }
  };
};

export const LoadUpdateQuantity = (orderItemId, quantity) => {
  return async (dispatch) => {
    try {
      const updatedQuantity = await UpdateOrderItem(orderItemId, quantity);
      dispatch({
        type: UPDATE_QUANTITY,
        payload: updatedQuantity,
      });
    } catch (error) {
      throw error;
    }
  };
};

export const LoadEmptyCart = (orderId) => {
  return async (dispatch) => {
    try {
      const deleteCart = await EmptyCart(orderId);
      dispatch({
        type: EMPTY_CART,
        payload: deleteCart,
      });
    } catch (error) {
      throw error;
    }
  };
};

export const LoadAddUserInfo = () => {
  return async (dispatch) => {
    try {
      const something = await UpdateOrder();
      dispatch({
        type: ADD_USER_INFO,
        payload: something,
      });
    } catch (error) {
      throw error;
    }
  };
};

export const LoadPlaceOrder = () => {
  return async (dispatch) => {
    try {
      const placedOrder = await GetCartById();
      dispatch({
        type: PLACE_ORDER,
        payload: placedOrder,
      });
    } catch (error) {
      throw error;
    }
  };
};
