const { REMOVE_FROM_CART, ADD_TO_CART, UPDATE_QUANTITY, EMPTY_CART } = require('../types');

const iState = {
	cart: {},
};

// cart will have:
// id (orderId)
// products = [...array of OrderItems linked to this order]
// first_name
// last_name
// email
// address
// postal_code
// city
// ordered

//action:
// 1. AddAddress update all fields
// 2. PlaceOrder will change ordered to True and clear cart.

const CartReducer = (state = iState, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			return {
				...state,
				products: state.products.map((product) =>
					product.id === action.id ? { ...product, selected: true } : product
				),
			};
		case REMOVE_FROM_CART:
			return {
				...state,
				products: state.products.map((product) =>
					product.id === action.id ? { ...product, selected: false, quantity: 1 } : product
				),
			};

		case UPDATE_QUANTITY:
			return {
				...state,
				products: state.products.map((product) =>
					product.id === action.id
						? {
								...product,
								quantity: product.quantity !== 1 ? product.quantity - 1 : 1,
						  }
						: product
				),
			};
		case EMPTY_CART:
			return {
				...state,
				products: state.products.map((product) =>
					product.selected ? { ...product, selected: false, quantity: 1 } : product
				),
			};
		default:
			return state;
	}
};
export default CartReducer;
