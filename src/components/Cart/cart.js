import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { Item } from '../common/Item/index';

const Cart = () => {
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext);
    
  if (totalQuantity === 0) {
    return (
      <div>
        <h1>No hay items en el carrito</h1>
        <Link to='/cart' className='Option'>Productos</Link>
      </div>
    );
  } 

  return (
    <div>
      {cart.map(p => <Item key={p.id} {...p} />)}
      <h3>Total: ${total}</h3>
      <button onClick={() => clearCart()} className='Button'>Limpiar carrito</button>
      <Link to='/' className='Option'>Checkout</Link>
    </div>
  );
};

export default Cart;
