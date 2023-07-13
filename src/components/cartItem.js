import React from 'react';


const CartItem = ({ id, name, description, precio, quantity }) => {
    return (
      <div>
        <CartItem key={id}>
        <h3>{name}</h3>
        <p>Description: {description}</p>
        <p>Precio: ${precio}</p>
        <p>Quantity: {quantity}</p>
 
  </CartItem>     </div>
    );
  };

  
  export default CartItem;
