


import React, { createContext, useContext, useState } from 'react';

export const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart((prevCart) =>
        prevCart.map((product) =>
          product.id === item.id
            ? { ...product, quantity: product.quantity + quantity }
            : product
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, { ...item, quantity }]);
    }
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((product) => product.id !== itemId);
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return cart.find((product) => product.id === id) ? true : false;
  };

  const getQuantity = () => {
    let quantity = 0;
    cart.forEach((product) => (quantity += product.quantity));
    return quantity;
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, getQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
