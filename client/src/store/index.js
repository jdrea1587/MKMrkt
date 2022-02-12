import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ProductReducer from './reducers/ProductReducer';
import CartReducer from './reducers/CartReducer';
import thunk from 'redux-thunk';

const store = createStore(
	combineReducers({
		productState: ProductReducer,
		cartState: CartReducer,
	}),
	composeWithDevTools(applyMiddleware(thunk))
);

export default store;
