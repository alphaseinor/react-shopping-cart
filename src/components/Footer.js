import React, {useContext} from 'react'
import {CartContext} from '../contexts/CartContext'

const Footer = () => {
  const {cart, removeItem} = useContext(CartContext)
  const getCartTotal = () => {
		return cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
  };
  
  return (
    <div className="shopping-cart__checkout">
			<p>Total: ${getCartTotal()}</p>
			<button>Checkout</button>
		</div>
  )
}

export default Footer