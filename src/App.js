
import './App.css';
import ItemListContainer from './components/NavBar/ItemListContainer/ItemListContainer';
import NavbarBoot from './components/NavBar/layout/navbarbootstrap/navbar_bootstrap';
import { Route, Routes, BrowserRouter  } from 'react-router-dom';
import CartWidget from './components/NavBar/CartWidget/CartWidget';
import { Alimentos } from './pages/alimentos';
import { Contacto } from './pages/contacto/index.';
import { Home } from './pages/home';
import { Salud } from './pages/salud';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    
    <NavbarBoot/> 
 
    <CartWidget/>
      <Routes>   
        <Route path="/" element={<Home/>} />
        <Route path="/alimentos" element={<Alimentos/>} />
        <Route path="/contacto" element={<Contacto/>} />
      <Route path="/salud" element={<Salud/>} />
           </Routes>
        <ItemListContainer greeting={'Bienvenidos'}/>
      
       </BrowserRouter>
      
     </div>
  );
}

export default App;

<div></div>