import React from 'react';
import { useCart } from './context/CartContext';

const UserCart = () => {
  const { cart, removeFromCart, addToCart, decreaseQuantity } = useCart();

  if (cart.length === 0) {
    return <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Your cart is empty</h2>;
  }

  return (
    <div className='cart-container'>
      {cart.map((item) => (
        <div className='cart-section' key={item.id}>
          <div className='cart-img'>
            <img src={item.image} alt={item.product} />
          </div>

          <div className='cart-details'>
            <h3>{item.product}</h3>
            <p>Model: {item.model}</p>
            <h2>${item.price}</h2>

            <div className='quantity-controls'>
              <button onClick={() => decreaseQuantity(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => addToCart(item)}>+</button>
            </div>

            <p>Total: ${item.price * item.quantity}</p>

            <button className='remove-btn' onClick={() => removeFromCart(item.id)}>
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserCart;
