/* import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import cart from '../assets/cart.svg';
import './cart.css';


const CartWidget = () => {
  const { getQuantity } = useContext(CartContext);

  return (
    <div className='CartWidget'> Itens
      <Link to='/cart'>
        <img className='CartImg' src={cart} alt='cart-widget' /> 
      </Link>
      <span className='CartQuantity'>{getQuantity()}</span>
    </div>
  );
};

export default CartWidget;
 */

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import cart from '../assets/cart.svg';
import './cart.css';

const CartWidget = () => {
  const { getQuantity } = useContext(CartContext);

  return (
    <div className='CartWidgetWrapper'>
      <div className='CartWidgetItems'> Itens
        <span className='CartQuantity'>{getQuantity()}</span>
        <Link to='/cart'>
          <img className='CartImg' src={cart} alt='cart-widget' /> 
        </Link>
        
      </div>
    </div>
  );
};

export default CartWidget;
