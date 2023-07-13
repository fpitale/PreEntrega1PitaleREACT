import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import CartWidget from './components/CartWidget/CartWidget';
import { Contacto, ItemDetailContainer, ItemListContainer } from './pages';
import Header from './components/layout/header/header';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/cart.js';
import Checkout from './components/checkout/Checkout';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <CartWidget />
          <Header />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:catId" element={<ItemListContainer />} />
            <Route path="/item-detail/:id" element={<ItemDetailContainer />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/cart" element={<Cart />} /> 
          <Route path="/checkout" element={<Checkout/>} /> 
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;

