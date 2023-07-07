/* import { useContext } from 'react'
import cart from '../assests/cart.svg'
import './cart.css'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { Item as CartItem } from "./Item";
import { Item } from "../common/Item";



const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)


    return (
        <Link to='/src/components/Cart/cart.js' className='CartWidget' style={{display: totalQuantity > 0 ? 'block' : 'none'}}>


            <img className='CartImg' src={cart} alt='cart-wdiget'/>
        {totalQuantity}
        </Link>
    )
    } 
        

export default CartWidget */

/* 
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { Item as CartItem } from './Item';
import cart from '../assets/cart.svg';

import './cart.css';
import { Item } from "../common/Item/index";



const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link to='/cart' className='CartWidget' style={{ display: totalQuantity > 0 ? 'block' : 'none' }}>
      <img className='CartImg' src={cart} alt='cart-widget' />
      {totalQuantity}
    </Link>
  );
};

export default CartWidget;
 */
/* import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import cart from '../Cart/cart';
import './cart.css';
import {} from '../assets/cart.svg'


const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link to='/' className='CartWidget' style={{ display: totalQuantity > 0 ? 'block' : 'none' }}>
      <img className='CartImg' src={cart} alt='cart-widget' />
      {totalQuantity}
    </Link>
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
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link to='/' className='CartWidget' style={{ display: totalQuantity > 0 ? 'block' : 'none' }}>
      <img className='CartImg' src={cart} alt='cart-widget' />
      {totalQuantity}
    </Link>
  );
};

export default CartWidget;
