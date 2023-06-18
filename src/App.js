import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import CartWidget from './components/CartWidget/CartWidget';
import { Contacto, ItemDetailContainer, ItemListContainer } from './pages';
import NavbarBoot from './components/navbarbootstrap/navbar_bootstrap';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      

        <NavbarBoot />
        <CartWidget />
          <header>
          <h1>La Manada</h1>
        </header>

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:catId" element={<ItemListContainer />} />
          <Route path="/item-detail/:id" element={<ItemDetailContainer />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
