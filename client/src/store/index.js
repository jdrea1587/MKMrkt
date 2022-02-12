import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ProductReducer from './reducers/ProductReducer';
import thunk from 'redux-thunk';

const store = createStore(
	combineReducers({
		productState: ProductReducer,
		//   commentState: CommentReducer
	}),
	composeWithDevTools(applyMiddleware(thunk))
);

export default store;
