import React, { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { Item } from '../common/Item/index';
import CartItem from '../cartItem';
import Checkout from '../checkout/Checkout';

const Cart = () => {
  const { cart, clearCart, getQuantity } = useContext(CartContext);

  if (getQuantity === 0) {
    return <Navigate to="/cart" />;
  }

  return (
    <div>
      {cart.map((p) => (
        <CartItem key={p.id} {...p} />
      ))}

      <button onClick={() => clearCart()} className='Button' style={{ backgroundColor: 'red' }}>
        Limpiar carrito
      </button>

      <Link to="/checkout" className='Option'>
        Ir para o checkout
      </Link>
    </div>
  );
};

export default Cart;
