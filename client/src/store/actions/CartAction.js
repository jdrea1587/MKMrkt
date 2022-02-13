import {
  AddOrderItem,
  DeleteOrderItem,
  UpdateOrderItem,
  EmptyCart,
  GetCartById,
  CreateNewCart,
} from '../../services/CartService';

import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_QUANTITY,
  EMPTY_CART,
  ADD_USER_INFO,
  PLACE_ORDER,
} from '../types';

//orderItem = {OrderItem obj}
export const addToCart = (orderItem) => {
  return {
    type: ADD_TO_CART,
    orderItem,
  };
};
export const removeFromCart = (orderItemId) => {
  return {
    type: REMOVE_FROM_CART,
    orderItemId,
  };
};
export const updateQuantity = (orderItemId, quantity) => {
  return {
    type: UPDATE_QUANTITY,
    orderItemId,
    quantity,
  };
};

export const emptyCart = (orderId) => {
  return {
    type: EMPTY_CART,
    orderId,
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
