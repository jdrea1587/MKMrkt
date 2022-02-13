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
  NEW_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_QUANTITY,
  EMPTY_CART,
  ADD_USER_INFO,
  PLACE_ORDER,
} from '../types';

//orderItem = {OrderItem obj} //orderId = IF there's already a cart
export const LoadAddToCart = (productId, orderId) => {
  return async (dispatch) => {
    try {
      if (orderId) {
        // create new OrderItem (serv) {productId: ##, orderId: ##}
        // dispatch
        const orderItem = await AddOrderItem({ productId, orderId });
        dispatch({
          type: ADD_TO_CART,
          payload: orderItem,
        });
      } else {
        const cart = await CreateNewCart();
        dispatch({
          type: NEW_CART,
          payload: cart.data.id,
        });
        const orderItem = await AddOrderItem({ productId, orderId: cart.data.id });
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

export const addUserInfo = () => {
  return {
    type: ADD_USER_INFO,
  };
};

export const placeOrder = () => {
  return {
    type: PLACE_ORDER,
  };
};
