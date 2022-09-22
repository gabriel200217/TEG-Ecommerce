import React from "react"
import { Header } from "./componentes/Header";
import 'boxicons';
import { BrowserRouter as Router} from "react-router-dom"
import Paginas from './componentes/Paginas';
import { DataProvider } from "./context/Dataprovider"
import { Carrito } from "./componentes/Carrito";
import { Factura } from "./componentes/Factura";

function App() {
  return (
    <div className="App">
      <Router>
        <DataProvider>
          <Header/>
          <Carrito/>
          <Factura/>
          <Paginas/>
        </DataProvider>
      </Router>
    </div>
    
  );
}

export default App;
