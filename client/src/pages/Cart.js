import React from 'react';

//Backend
//Create Cart reducer with actions which creates order
//1. Create new order action
//2. Add products to order:
// each time someone adds a product,
// check to see if product is already in cart
// func. action= NewOrder, AddNewProductToOrder, UpdateProductInOrder, DeleteProductInOrder
// if in cart: update quantity of orderitem product
// else if create OrderItem with the product and order attached

//FrontEnd
//Grab Cart state, contains order if is one
//if no cart state -> 'no items in cart' : '(mapProductsInCart)'
//calculate total cost of products in order
//update amount of items in cart

const Cart = () => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh',
			}}
		>
			<h1>Your cart is empty! You're a window shopper.</h1>
		</div>
	);
};

export default Cart;
