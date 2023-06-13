import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import CartWidget from './components/CartWidget/CartWidget';
import { Salud, Alimentos, Contacto, ItemListContainer, ItemDetailContainer } from './pages';
import NavbarBoot from './components/navbarbootstrap/navbar_bootstrap';
import { Presentacion } from './pages/inicio/presentacion';


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarBoot/>
        <CartWidget/>
        <div className="content-wrapper">
          <Presentacion/>
          <Routes>  
            <Route path="/" element={<ItemListContainer greeting={'La Manada'} />} />
            <Route path="/category/:catId" element={<ItemListContainer />} />
            <Route path="/item-detail/:id" element={<ItemDetailContainer />} />
            <Route path="/Alimentos y golosinas" element={<Alimentos />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/salud" element={<Salud />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
