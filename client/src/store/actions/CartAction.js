// import {
//     GetProducts, GetProductBySlug, NewProduct, UpdateProduct, DeleteProduct
// } from '../../services/CartService'
import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY, SUB_QUANTITY, EMPTY_CART } from '../types';

export const addToCart = (orderId, productId) => {
	return {
		type: ADD_TO_CART,
		orderId,
		productId,
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
