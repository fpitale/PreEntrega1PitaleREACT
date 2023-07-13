import React from 'react';


const CartItem = ({ id, name, description, precio, quantity }) => {
    return (
      <div>
       
        <h3>{name}</h3>
        <p>Description: {description}</p>
        <p>Precio: ${precio*quantity}</p>
        <p>Quantity: {quantity}</p>
 
     </div>
    );
  };

  
  export default CartItem;
