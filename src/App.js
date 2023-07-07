import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import CartWidget from './components/CartWidget/CartWidget';
import { Contacto, ItemDetailContainer, ItemListContainer } from './pages';
import Header from './components/layout/header/header';
import { CartProviter } from './context/CartContext';
import Cart from './components/Cart/cart.js';



const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <CartProviter>

       
        <CartWidget />
       { <Header/>}
         
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:catId" element={<ItemListContainer />} />
          <Route path="/item-detail/:id" element={<ItemDetailContainer />} />
          <Route path="/contacto" element={<Contacto />} />
         {/*  <Route path='/src/components/Cart/cart.js' element={<Cart/>} /> */}
          <Route path='/cart' element={<Cart />} />

      

        </Routes>
        </CartProviter>
      </BrowserRouter>
    </div>
  );
};

export default App;
