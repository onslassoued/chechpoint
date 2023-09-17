import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Acceuil from './Acceuil';
import Products from './Products';
import Client from './Client';


function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Acceuil></Acceuil>
     <Products></Products>
     <Client></Client>
    </div>
  );
}

export default App;
