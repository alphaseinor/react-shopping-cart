import React, {useContext} from 'react';
import {CartContext} from '../contexts/CartContext'


// Components
import Item from './ShoppingCartItem';

const ShoppingCart = () => {
	const {cart, removeItem} = useContext(CartContext)
	
	return (
		<div className="shopping-cart">
			{cart.map(item => (
				<Item key={item.id} {...item} removeItem={removeItem} />
			))}
		</div>
	);
};

export default ShoppingCart;
