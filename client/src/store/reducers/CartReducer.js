const {
  UPDATE_CART,
  REMOVE_FROM_CART,
  ADD_TO_CART,
  UPDATE_QUANTITY,
  EMPTY_CART,
  ADD_USER_INFO,
  PLACE_ORDER,
} = require('../types');

const iState = {};

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

//actions to add:
// 1. AddAddress update all fields
// 2. PlaceOrder will change ordered to True and clear cart.

const CartReducer = (state = iState, action) => {
  switch (action.type) {
    case UPDATE_CART:
      return action.payload;
    case ADD_TO_CART:
      return { ...state, products: [...state.products, action.payload] };
    case REMOVE_FROM_CART:
      return {
        ...state,
        products: state.products.filter((product) => product.id !== action.payload),
      };
    case UPDATE_QUANTITY:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.id
            ? {
                ...product,
                quantity: action.payload,
              }
            : product
        ),
      };
    case EMPTY_CART:
      return { ...state, products: [] };
    case ADD_USER_INFO:
      return {
        ...state,
        first_name: action.payload.first_name,
        last_name: action.payload.last_name,
        email: action.payload.email,
        address: action.payload.address,
        postal_code: action.payload.postal_code,
        city: action.payload.city,
        ordered: action.payload.ordered,
      };
    case PLACE_ORDER:
      return {
        ...state,
        ordered: true,
      };
    default:
      return state;
  }
};
export default CartReducer;
