
import './App.css';

import { Route, Routes, BrowserRouter  } from 'react-router-dom';
import CartWidget from './components/CartWidget/CartWidget';
/* import ItemListContainer from './pages/ItemListContainer/ItemListContainer'  */
import {Inicio, Salud, Alimentos, Contacto, ItemListContainer} from './pages';
import NavbarBoot from './components/navbarbootstrap/navbar_bootstrap';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <NavbarBoot/> 
  {/*  { <ItemListContainer greeting={'La Manada'}/>} */}
    
    <CartWidget/>
          <Routes>  
        <Route path="/" element={<ItemListContainer/>} />
         <Route path="/category/:catId"  element={ <ItemListContainer />} />
         <Route path="/" element={<Inicio/>} /> 
        <Route path="/Alimentos y golosinas" element={<Alimentos/>} />
        <Route path="/contacto" element={<Contacto/>} />
      <Route path="/salud" element={<Salud/>} />
           </Routes>
           
           <NavbarBoot/> 
          </BrowserRouter>
      
     </div>
  );
}



export default App;

