
import './App.css';
import ItemListContainer from './components/NavBar/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/Navbar_coder';


function App() {
  return (
    <div className="App">
  <NavBar />
  <ItemListContainer greeting={'Bienvenidos'}/>
    </div>
  );
}

export default App;
