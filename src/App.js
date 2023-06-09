
import './App.css';

import { Route, Routes, BrowserRouter  } from 'react-router-dom';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import {Inicio, Salud, Alimentos, Contacto, Pages } from './pages';
import NavbarBoot from './components/navbarbootstrap/navbar_bootstrap';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
   { <ItemListContainer greeting={'La Manada'}/>}
    <NavbarBoot/> 
 
    <CartWidget/>
      <Routes>   
        <Route path="/Inicio" element={<Inicio/>} />
        <Route path="/Alimentos y golosinas" element={<Alimentos/>} />
        <Route path="/contacto" element={<Contacto/>} />
      <Route path="/salud" element={<Salud/>} />
      
           </Routes>
       
      
       </BrowserRouter>
      
     </div>
  );
}

export default App;

