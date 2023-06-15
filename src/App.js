import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import CartWidget from './components/CartWidget/CartWidget';
import { Alimentos, Contacto, ItemListContainer, ItemDetailContainer } from './pages';
import NavbarBoot from './components/navbarbootstrap/navbar_bootstrap';




const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
     
        <NavbarBoot/>
         <CartWidget/>
         
        
          <Routes>  
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:catId" element={<ItemListContainer />} />
            <Route path="/item-detail/:id" element={<ItemDetailContainer />} />
            <Route path="/Alimentos y golosinas" element={<Alimentos />} />
            <Route path="/contacto" element={<Contacto />} />
            
          </Routes>
         
            </BrowserRouter>
    </div>
  );
};

export default App;
