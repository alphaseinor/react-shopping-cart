import React, {useContext} from 'react'
import {NavLink} from 'react-router-dom'
import {CartContext} from '../contexts/CartContext'

const Footer = () => {
  const {cart} = useContext(CartContext)
  const getCartTotal = () => {
		return cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
  };
  
  return (
    <div className="shopping-cart__checkout">
			<p>Total: ${getCartTotal()}</p>
			<NavLink to="/cart">Checkout</NavLink>
		</div>
  )
}

export default Footer