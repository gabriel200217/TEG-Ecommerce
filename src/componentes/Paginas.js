import React from 'react'
import { Switch, Route} from "react-router-dom";
import { Debugging } from './Debugger';
// import Include from './Debugger/include';
import { Inicio } from './Inicio/index';
//import { Customers } from './Productos/customers';
import { ProductosListas } from './Productos/index';
import { CustomerList } from './utils/UseGet';


const Paginas = () =>{
    return(
        <section>
            <Switch>
                <Route path="/" exact component={Inicio}/>
                <Route path="/productos" exact component={ProductosListas}/>
                <Route path="/UseGet" exact component={CustomerList}/>
                <Route path="/Debug" exact component={Debugging}/>
                {/* <Route path="/Debug2" exact component={Include}/> */}
            </Switch>
        </section>
    )
}
export default Paginas;